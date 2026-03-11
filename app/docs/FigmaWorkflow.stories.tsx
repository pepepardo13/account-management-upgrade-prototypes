import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stack, Text } from "@envato/design-system/components";

import { SurfaceCard } from "../components/foundation/SurfaceCard.tsx";

function FigmaWorkflowDoc() {
  return (
    <Stack spacing="4x">
      <SurfaceCard
        title="How this foundation is meant to be used"
        description="This workspace is ready for a Figma MCP driven implementation loop."
      >
        <Stack spacing="2x">
          <Text variant="body-large">
            1. Share a Figma design URL and identify the frame or node to build.
          </Text>
          <Text variant="body-large">
            2. Pull design context from Figma MCP and treat the returned code as a
            reference, not final implementation.
          </Text>
          <Text variant="body-large">
            3. Map the design onto these Storybook layouts and local primitives,
            reusing design-system components first.
          </Text>
          <Text variant="body-large">
            4. Add a dedicated story for each approved screen before wiring it into
            any product app.
          </Text>
        </Stack>
      </SurfaceCard>

      <SurfaceCard
        title="What already exists here"
        description="This avoids rebuilding the same setup every time a new design arrives."
      >
        <Stack spacing="2x">
          <Text variant="body-large">
            Storybook is configured with light and dark mode, locale switching,
            docs, a11y, and a memory router.
          </Text>
          <Text variant="body-large">
            Neutral layout stories exist for app shell, content grid, and settings
            style screens.
          </Text>
          <Text variant="body-large">
            Small local primitives cover surfaces, placeholder fields, toggles, and
            page shell structure.
          </Text>
        </Stack>
      </SurfaceCard>
    </Stack>
  );
}

const meta = {
  title: "Docs / Figma Workflow",
  component: FigmaWorkflowDoc,
} satisfies Meta<typeof FigmaWorkflowDoc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
