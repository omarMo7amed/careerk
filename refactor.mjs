import { Project, SyntaxKind } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "D:/Courses/github/careerk/tsconfig.json",
});

const apiFiles = project.getSourceFiles("D:/Courses/github/careerk/src/entities/*/api/*.ts");
const skipFiles = ["uploadCV.ts", "uploadProfilePhoto.ts", "getBookmarkedJobs.ts"];

for (const sourceFile of apiFiles) {
  const fileName = sourceFile.getBaseName();
  if (skipFiles.includes(fileName)) {
    console.log(`Skipping ${fileName}`);
    continue;
  }
  
  let needsAuthInterceptorImport = false;
  
  // Replace fetch with authInterceptor
  const fetchCalls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression)
    .filter(c => c.getExpression().getText() === "fetch");
    
  for (const fetchCall of fetchCalls) {
    needsAuthInterceptorImport = true;
    fetchCall.getExpression().replaceWithText("authInterceptor");
    
    // Fix URL argument to strip BASE_URL
    const urlArg = fetchCall.getArguments()[0];
    if (urlArg) {
      const text = urlArg.getText();
      // Handle template literal
      if (text.startsWith("`") && text.includes("BASE_API_URL}")) {
         const replaced = text.replace(/\$\{.*BASE_API_URL\}/g, "");
         urlArg.replaceWithText(replaced);
      }
      else if (text.startsWith("url")) {
         console.log(`[!] Manual fix needed for URL in ${fileName}: ${text}`);
      }
    }
    
    // Remove Authorization header from options
    const optionsArg = fetchCall.getArguments()[1];
    if (optionsArg && optionsArg.isKind(SyntaxKind.ObjectLiteralExpression)) {
       const headersProp = optionsArg.getProperty("headers");
       if (headersProp && headersProp.isKind(SyntaxKind.PropertyAssignment)) {
          const headersObj = headersProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
          if (headersObj) {
            const authProp = headersObj.getProperty("Authorization") || headersObj.getProperty("authorization");
            if (authProp) authProp.remove();
            
            if (headersObj.getProperties().length === 0) {
               headersProp.remove();
            }
          }
       }
    }
  }

  // Remove token argument from exported functions and update callers
  const functions = sourceFile.getFunctions().filter(f => f.isExported() && f.isAsync());
  for (const func of functions) {
    const tokenParam = func.getParameter("token");
    if (tokenParam) {
      console.log(`Removing 'token' from ${func.getName()} in ${fileName}`);
      
      const references = func.findReferencesAsNodes();
      for (const ref of references) {
        const callExpr = ref.getFirstAncestorByKind(SyntaxKind.CallExpression);
        if (callExpr && callExpr.getExpression().getText() === func.getName()) {
          const args = callExpr.getArguments();
          if (args.length > 0) {
            // Find which argument is token. Typically it's the first one, except in some cases like 'updateCompanyJob(jobId, payload, token)'?
            // Actually let's just remove the first arg if token is the first param.
            const paramIndex = func.getParameters().findIndex(p => p.getName() === "token");
            if (paramIndex >= 0 && args.length > paramIndex) {
              callExpr.removeArgument(paramIndex);
            } else {
               console.log(`[!] Manual fix needed for callers of ${func.getName()} in ${fileName}`);
            }
          }
        }
      }
      tokenParam.remove();
    }
  }
  
  if (needsAuthInterceptorImport) {
    const hasImport = sourceFile.getImportDeclaration(decl => decl.getModuleSpecifierValue() === "@/shared" && decl.getNamedImports().some(ni => ni.getName() === "authInterceptor"));
    if (!hasImport) {
      sourceFile.addImportDeclaration({
        moduleSpecifier: "@/shared",
        namedImports: [{ name: "authInterceptor" }]
      });
    }
  }
}

project.saveSync();
console.log("Refactoring complete.");
