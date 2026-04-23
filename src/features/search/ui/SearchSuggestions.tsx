// "use client";

// import { SearchSuggestionsProps } from "../types/searchSuggestions";

// export function SearchSuggestions({
//   suggestions,
//   highlighted,
//   onHighlight,
//   onSelect,
//   isLoading,
//   error,
//   query,
// }: SearchSuggestionsProps) {
//   return (
//     <div className="absolute left-0 right-0 mt-2 z-30 flex justify-center h-[300px] overflow-y-hidden">
//       <div className="w-full max-w-2xl h-full">
//         <div
//           role="listbox"
//           aria-label="Search suggestions"
//           className="rounded-md bg-bg-surface border border-border shadow-lg h-full max-h-[300px] overflow-y-auto p-3"
//         >
//           {isLoading && !suggestions.length && (
//             <div className="flex items-center gap-2 p-3 text-sm text-text-muted">
//               <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-text-muted border-t-transparent" />
//               Searching…
//             </div>
//           )}

//           {error && (
//             <div className="text-sm text-error max-h-full overflow-y-auto whitespace-pre-wrap wrap-break-word">
//               {error.message}
//             </div>
//           )}

//           {!isLoading && !error && query && !suggestions.length && (
//             <div className="text-sm text-text-muted">No results found</div>
//           )}

//           {suggestions.length > 0 && (
//             <ul className="divide-y divide-border max-h-72 overflow-y-auto bg-bg-surface">
//               {suggestions.map((item, i) => (
//                 <li
//                   key={item.id}
//                   role="option"
//                   aria-selected={highlighted === i}
//                   onPointerEnter={() => onHighlight(i)}
//                   onPointerLeave={() => onHighlight(-1)}
//                   onClick={() => onSelect(item)}
//                   className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
//                     highlighted === i ? "bg-bg-muted" : "hover:bg-bg-muted/50"
//                   }`}
//                 >
//                   {/* We will implement it */}

//                   {/* <div className="min-w-0 flex-1">
//                     <p className="truncate text-sm font-medium text-foreground">
//                       {item.title}
//                     </p>
//                     <p className="truncate text-xs text-muted-foreground">
//                       {item.company?.name}
//                       {item.location ? ` · ${item.location}` : ""}
//                     </p>
//                   </div>
//                   {item.workArrangement && (
//                     <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
//                       {item.workArrangement}
//                     </span>
//                   )} */}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
