# CareerK - Modern Job Platform

A modern job platform built with Next.js 14+ and Feature-Sliced Design architecture, connecting job seekers with their dream careers and helping companies find top talent.

## 🚀 Features

- **Dual Dashboard System**: Separate interfaces for companies and job seekers
- **Job Management**: Post, browse, and manage job listings
- **Candidate Tracking**: Company tools for managing applicants
- **Job Applications**: Easy application process for job seekers
- **CV Management**: Upload and manage resumes
- **Analytics**: Insights and metrics for companies
- **Responsive Design**: Beautiful UI that works on all devices

## 📁 Project Structure

This project follows **Feature-Sliced Design (FSD)** architecture for better scalability and maintainability.

```
src/
├── app/          # Next.js pages and routes
├── features/     # Business features (auth, applications, etc.)
├── entities/     # Domain models (Job, Company, Candidate)
├── widgets/      # Compositional UI blocks (Header, Footer, Cards)
└── shared/       # Reusable UI components and utilities
```

For detailed architecture documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Feature-Sliced Design (FSD)
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Development

### Adding a New Feature

1. Create a new directory in `src/features/[feature-name]`
2. Add UI components in `ui/`
3. Add business logic in `model/`
4. Add API calls in `api/`
5. Export public API in `index.ts`

### Creating a New Page

Pages use Next.js App Router:

- Create `page.tsx` in the appropriate `app/` directory
- Compose existing widgets and features
- Add metadata for SEO

### Building Components

- **Shared components**: Add to `src/shared/ui/`
- **Feature-specific**: Add to feature's `ui/` directory
- **Widget compositions**: Add to `src/widgets/`

## 📚 Key Routes

### Public Pages

- `/` - Landing page
- `/jobs` - Browse jobs
- `/companies` - Browse companies
- `/candidates` - Browse candidates (for companies)
- `/auth` - Authentication

### Company Dashboard (`/dashboard/company/`)

- `/overview` - Dashboard overview
- `/profile` - Company profile
- `/joblisting/[jobId]` - Job details
- `/joblisting/applications` - Job applications
- `/candidates` - Candidate management
- `/analytics` - Analytics and insights
- `/settings` - Settings

### Jobseeker Dashboard (`/dashboard/jobseeker/`)

- `/overview` - Dashboard overview
- `/profile` - User profile
- `/recommended-jobs` - Personalized recommendations
- `/find-jobs` - Job search
- `/applications` - Application tracking
- `/cv-management` - Resume management
- `/settings` - Settings

## 🎨 Shared UI Components

Available in `src/shared/ui/`:

- **Button** - Various styles and sizes
- **Badge** - Status and label badges
- **Input** - Form inputs with validation
- **SearchBar** - Search functionality
- **ConfirmationModal** - User confirmations
- **IconX** - Close/delete icon

Import using:

```typescript
import { Button, Badge, Input } from "@/shared";
```

## 🗂️ FSD Layer Guidelines

### Shared Layer

- Reusable UI components
- Common utilities
- No business logic
- Cannot import from other layers

### Entities Layer

- Domain models (Job, Company, Candidate)
- Business entity logic
- Can import from `shared` only

### Features Layer

- User-facing functionality
- Business logic
- Can import from `entities` and `shared`

### Widgets Layer

- Compositional UI blocks
- Page sections
- Can import from `features`, `entities`, and `shared`

### App Layer (Pages)

- Route definitions
- Page composition
- Can import from all layers

## 🔒 Import Rules

```
✅ Allowed:
app → widgets, features, entities, shared
widgets → features, entities, shared
features → entities, shared
entities → shared
shared → (nothing)

❌ Forbidden:
Lower layers importing from higher layers
```

## 📝 Naming Conventions

- **Components**: `PascalCase.tsx`
- **Hooks**: `useCamelCase.ts`
- **Directories**: `kebab-case`
- **Types**: `PascalCase.ts` or `types.ts`

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage
pnpm test:coverage
```

## 🚀 Deployment

```bash
# Build production bundle
pnpm build

# Start production server
pnpm start
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.

## 📖 Documentation

- [Architecture Guide](./ARCHITECTURE.md) - Detailed FSD architecture explanation
- [Features README](./src/features/README.md) - Feature layer guidelines
- [Entities README](./src/entities/README.md) - Entity layer guidelines
- [Widgets README](./src/widgets/README.md) - Widget layer guidelines

## 🤝 Contributing

1. Follow the FSD architecture principles
2. Keep components small and focused
3. Write meaningful commit messages
4. Test your changes
5. Update documentation as needed

## 📄 License

MIT License - feel free to use this project for learning or production.

---

Built with ❤️ using Feature-Sliced Design
