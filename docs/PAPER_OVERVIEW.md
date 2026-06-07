# 🎓 CareerK: High-Level Overview Diagrams

> These diagrams are designed specifically for academic documentation to give your professor (doctor) a clear, high-level understanding of the platform's purpose and software engineering architecture.

---

## 1. Platform Ecosystem & User Flow (System Overview)

**Purpose for your paper:** This diagram explains *what* the system does and *who* uses it. It shows the two main actors (Job Seekers and Companies) and how they interact with the CareerK platform to achieve their goals.

```mermaid
graph TD
    %% Styling
    classDef actor fill:#f3f4f6,stroke:#6b7280,stroke-width:2px,color:#111827;
    classDef sys fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a5f;
    classDef db fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#14532d;

    %% Actors
    JS(("👤 Job Seeker")):::actor
    CO(("🏢 Company")):::actor

    %% Platform
    subgraph PLATFORM["CareerK Frontend Platform (Next.js)"]
        JS_PORTAL["Job Seeker Portal<br/>- Manage CV & Profile<br/>- Search Jobs<br/>- Apply for Jobs"]:::sys
        CO_PORTAL["Company Portal<br/>- Post Job Listings<br/>- Review Applications<br/>- Analytics"]:::sys
        AUTH["Secure Authentication<br/>& Role Management"]:::sys
    end

    %% Backend Services
    BACKEND[("☁️ Backend API & Database")]:::db

    %% Connections
    JS -->|"Uses"| JS_PORTAL
    CO -->|"Uses"| CO_PORTAL
    
    JS_PORTAL -.->|"Role Check"| AUTH
    CO_PORTAL -.->|"Role Check"| AUTH
    
    JS_PORTAL <-->|"Fetches/Updates"| BACKEND
    CO_PORTAL <-->|"Fetches/Updates"| BACKEND
    AUTH <-->|"Validates"| BACKEND
```

---

## 2. Software Architecture: Feature-Sliced Design (FSD)

**Purpose for your paper:** This diagram explains *how* the system is built. Professors appreciate strong software engineering principles. This diagram demonstrates that your codebase isn't just a mess of files, but follows a strict, layered architectural pattern (FSD) that ensures scalability and maintainability.

```mermaid
graph BT
    %% Styling
    classDef layerApp fill:#1e40af,stroke:#1e3a5f,stroke-width:2px,color:#ffffff;
    classDef layerWidget fill:#7e22ce,stroke:#581c87,stroke-width:2px,color:#ffffff;
    classDef layerFeature fill:#c2410c,stroke:#7c2d12,stroke-width:2px,color:#ffffff;
    classDef layerEntity fill:#15803d,stroke:#052e16,stroke-width:2px,color:#ffffff;
    classDef layerShared fill:#374151,stroke:#111827,stroke-width:2px,color:#ffffff;
    classDef description fill:none,stroke:none,color:#4b5563,font-style:italic;

    %% Layers
    SHARED["⚪ SHARED LAYER<br/><br/>Reusable UI components (Buttons, Inputs)<br/>and utility functions"]:::layerShared
    
    ENTITIES["🟢 ENTITIES LAYER<br/><br/>Core business models<br/>(User, Job, Application, Company)"]:::layerEntity
    
    FEATURES["🟠 FEATURES LAYER<br/><br/>User interactions and actions<br/>(Apply for Job, Upload CV, Login)"]:::layerFeature
    
    WIDGETS["🟣 WIDGETS LAYER<br/><br/>Complex blocks combining features<br/>(Header, Job Seeker Profile Dashboard)"]:::layerWidget
    
    APP["🔵 APP LAYER<br/><br/>Application routing, pages,<br/>and global layouts"]:::layerApp

    %% Relationships (Strict Unidirectional Flow)
    ENTITIES -->|"Imports from"| SHARED
    FEATURES -->|"Imports from"| ENTITIES
    FEATURES -->|"Imports from"| SHARED
    WIDGETS -->|"Imports from"| FEATURES
    WIDGETS -->|"Imports from"| ENTITIES
    APP -->|"Imports from"| WIDGETS
    
    %% Architectural Rule Note
    note["Strict Architectural Rule:<br/>Higher layers can only import from lower layers.<br/>This prevents circular dependencies and spaghetti code."]
    style note fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#7f1d1d,stroke-dasharray: 5 5
```

---
### 💡 How to use these in your paper:
1. **Diagram 1 (Platform Ecosystem)** should be placed in the **Introduction or System Overview** section of your paper to explain the problem you are solving and how users interact with the solution.
2. **Diagram 2 (Software Architecture)** should be placed in the **Implementation or Methodology** section to prove to your doctor that you used an advanced, modern engineering pattern (Feature-Sliced Design) for the frontend development.
