import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Stack, Text } from "@envato/design-system/components";

import { PageShell } from "../components/foundation/PageShell.tsx";
import { SidebarNavigation } from "../components/foundation/SidebarNavigation.tsx";
import { SurfaceCard } from "../components/foundation/SurfaceCard.tsx";
import { useTranslations } from "../contexts/TranslationsContext.tsx";
import { foundationSidebarGroups } from "./storyData.ts";

function AppShellLayout() {
  const t = useTranslations();

  return (
    <PageShell
      title={t("foundation.pageTitle")}
      description={t("foundation.pageDescription")}
      sidebar={
        <SidebarNavigation title="Upgrade Flow" groups={foundationSidebarGroups} />
      }
      actions={
        <Button variant="primary" size="medium">
          {t("foundation.ctaPrimary")}
        </Button>
      }
    >
      <Stack spacing="4x">
        <SurfaceCard
          title="Use this as your page starting point"
          description="Swap the sidebar data, page actions, and card content as soon as a Figma screen arrives."
        >
          <Text variant="body-large" color="secondary">
            This layout keeps the same overall Storybook and design-system shape
            as your reference project, but without product-specific routes or
            heavy mocks.
          </Text>
        </SurfaceCard>
        <SurfaceCard
          title="Implementation note"
          description="Keep structure in design-system primitives first, then layer product-specific components on top."
        >
          <Text variant="body-large" color="secondary">
            When you share a Figma URL, the target screen can be implemented as a
            new story by replacing these placeholder surfaces with real content.
          </Text>
        </SurfaceCard>
      </Stack>
    </PageShell>
  );
}

const meta = {
  title: "Layout / App Shell",
  component: AppShellLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AppShellLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
