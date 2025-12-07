# Widgets Layer

This directory contains **widgets** - compositional UI blocks that combine multiple features and entities.

## Structure

Each widget should contain:

- `ui/` - Main widget components
- `model/` - Widget-specific state and logic (if needed)
- `lib/` - Helper functions for the widget

## Examples

- Header with navigation
- Job listing cards
- Sidebar navigation
- Footer
- Filter bar
- Hero section

## Guidelines

- Widgets are larger UI blocks composed of smaller components
- Widgets can use features, entities, and shared components
- Widgets should be reusable across multiple pages
- Keep widgets focused on UI composition, not business logic
