# Features Layer

This directory contains **features** - user-facing functionality that provides business value.

## Structure

Each feature should contain:

- `ui/` - UI components specific to this feature
- `model/` - State management, hooks, and business logic
- `api/` - API calls related to this feature
- `lib/` - Helper functions and utilities

## Examples

- User authentication
- Job application submission
- Profile editing
- CV upload

## Guidelines

- Features should be isolated and independent
- Features can use entities, shared, and other layers below them
- Features should NOT import from widgets or pages
