import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Stack } from "@envato/design-system/components";

import { PlaceholderField } from "./PlaceholderField.tsx";
import { SurfaceCard } from "./SurfaceCard.tsx";
import { TogglePill } from "./TogglePill.tsx";

function FoundationPrimitivesShowcase() {
  return (
    <Stack spacing="4x">
      <SurfaceCard
        title="Surface Card"
        description="Base container for sections, cards, or callouts."
        action={
          <Button variant="secondary" size="medium">
            Action
          </Button>
        }
      />
      <SurfaceCard title="Placeholder Field">
        <PlaceholderField
          label="Field label"
          hint="Use while waiting for final input behavior"
          value="Placeholder value"
        />
      </SurfaceCard>
      <SurfaceCard title="Toggle Pill">
        <TogglePill
          label="Feature flag"
          description="A lightweight on or off presentation pattern."
          enabled={true}
        />
      </SurfaceCard>
    </Stack>
  );
}

const meta = {
  title: "Components / Foundation Primitives",
  component: FoundationPrimitivesShowcase,
} satisfies Meta<typeof FoundationPrimitivesShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
