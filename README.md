# Upgrade Flow Design Foundation

This workspace is a clean Storybook foundation based on the setup in
`/Users/josepardo/Documents/:dev/design-playground`, without changing that
source project.

It keeps the parts that matter for incoming design work:

- Storybook with Vite and TypeScript
- `@envato/design-system` provider setup
- light and dark mode toolbar
- locale toolbar
- example page layouts
- local foundation primitives
- a documented Figma MCP workflow

## Prerequisites

- Node.js >= 22
- GitHub CLI (`gh`)

## Setup

Authenticate for GitHub Packages if needed:

```bash
gh auth login --scopes read:packages
export GITHUB_TOKEN=$(gh auth token)
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Start Storybook:

```bash
npm run storybook
```

## What to use

- `app/examples/AppShell.stories.tsx`
- `app/examples/ContentGrid.stories.tsx`
- `app/examples/SettingsPage.stories.tsx`
- `app/components/foundation/`
- `docs/figma-workflow.md`

## When a design arrives

1. Share the Figma URL.
2. Pull design context through the Figma MCP.
3. Adapt the result to this repo's Storybook stories and local foundation.
4. Add a dedicated story for the screen before integrating further.
