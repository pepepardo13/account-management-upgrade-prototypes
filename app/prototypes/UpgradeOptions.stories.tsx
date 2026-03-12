import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  UpgradePrototypePage,
  type UpgradeVariant,
} from "./UpgradePrototypePage.tsx";

type StoryArgs = {
  variant: UpgradeVariant;
};

const meta = {
  title: "Prototypes / Upgrade Options",
  component: UpgradePrototypePage,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    variant: "A",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["A", "B", "C", "A_ALT", "B_ALT"],
    },
  },
} satisfies Meta<typeof UpgradePrototypePage>;

export default meta;
type Story = StoryObj<StoryArgs>;

export const UpgradeOptionA: Story = {
  args: {
    variant: "A",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Bottom-emphasis version with the success confirmation placed above the action buttons.",
      },
    },
  },
};

export const UpgradeOptionB: Story = {
  args: {
    variant: "B",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Middle-emphasis version with the success confirmation grouped into the pricing summary.",
      },
    },
  },
};

export const UpgradeOptionC: Story = {
  args: {
    variant: "C",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Strongest confirmation version with success messaging both near the title and in the pricing summary.",
      },
    },
  },
};

export const UpgradeOptionAAlt: Story = {
  args: {
    variant: "A_ALT",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Alternate copy version of option A with a single-line success confirmation.",
      },
    },
  },
};

export const UpgradeOptionBAlt: Story = {
  args: {
    variant: "B_ALT",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Alternate copy version of option B with a single-line success confirmation.",
      },
    },
  },
};
