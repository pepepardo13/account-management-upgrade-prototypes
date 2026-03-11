# Figma Workflow

This workspace is prepared for a Figma-to-Storybook flow using the `user-Figma`
MCP server and the same general Storybook structure used in
`/Users/josepardo/Documents/:dev/design-playground`.

## Intended flow

1. Share a Figma URL for the screen or frame you want to build.
2. Extract `fileKey` and `nodeId` from the URL.
3. Use Figma MCP `get_design_context` as the primary design intake step.
4. Treat the generated output as reference code only.
5. Rebuild the screen with the local foundation in `app/`, favoring
   `@envato/design-system` components first.
6. Add or update a Storybook story for the screen before any production wiring.

## Local conventions

- Start from `app/examples/AppShell.stories.tsx` for sidebar-based pages.
- Start from `app/examples/ContentGrid.stories.tsx` for browse or gallery pages.
- Start from `app/examples/SettingsPage.stories.tsx` for settings or form pages.
- Put shared foundation pieces in `app/components/foundation/`.
- Keep layout constants in `app/foundation/tokens.ts`.
- Prefer design-system spacing, typography, and surface props over custom CSS.

## Notes

- This repo intentionally does not modify the source project in
  `/Users/josepardo/Documents/:dev/design-playground`.
- If a Figma response includes absolute positioning or raw colors, use it as a
  visual guide and map it back to the design system rather than copying it
  literally.
