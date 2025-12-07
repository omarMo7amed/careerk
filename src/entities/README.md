# Entities Layer

This directory contains **entities** - business entities that represent the core domain models.

## Structure

Each entity should contain:

- `model/` - Type definitions, schemas, and business logic
- `ui/` - Reusable UI components for displaying this entity
- `api/` - API calls for CRUD operations on this entity
- `lib/` - Helper functions specific to this entity

## Examples

- Job
- Company
- Candidate
- Application
- User

## Guidelines

- Entities represent your core business domain
- They should be reusable across different features
- Entities should NOT import from features, widgets, or pages
- Focus on the "what" not the "how"
