import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box, Button, Stack, Text } from "@envato/design-system/components";

import { PageShell } from "../components/foundation/PageShell.tsx";
import { PlaceholderField } from "../components/foundation/PlaceholderField.tsx";
import { SidebarNavigation } from "../components/foundation/SidebarNavigation.tsx";
import { SurfaceCard } from "../components/foundation/SurfaceCard.tsx";
import { TogglePill } from "../components/foundation/TogglePill.tsx";
import { useTranslations } from "../contexts/TranslationsContext.tsx";
import { foundationSidebarGroups } from "./storyData.ts";

function SettingsPageLayout() {
  const t = useTranslations();

  return (
    <PageShell
      title={t("foundation.settingsHeading")}
      description={t("foundation.settingsDescription")}
      sidebar={
        <SidebarNavigation title="Upgrade Flow" groups={foundationSidebarGroups} />
      }
      centered={true}
    >
      <Stack spacing="6x">
        <SurfaceCard title="Profile">
          <Stack spacing="4x">
            <PlaceholderField
              label="Display name"
              hint="Shown on your public profile"
              value="Your name"
            />
            <PlaceholderField
              label="Email address"
              hint="Used for login and notifications"
              value="your@email.com"
            />
            <PlaceholderField
              label="Role"
              hint="Useful placeholder for permissions-related screens"
              value="Administrator"
            />
          </Stack>
        </SurfaceCard>

        <SurfaceCard title="Notifications">
          <Stack spacing="4x">
            <TogglePill
              label="Email digests"
              description="Receive a weekly summary of activity."
              enabled={true}
            />
            <TogglePill
              label="Security alerts"
              description="Important account and access notifications."
              enabled={true}
            />
            <TogglePill
              label="Marketing emails"
              description="Promotions, tips, and announcements."
            />
          </Stack>
        </SurfaceCard>

        <Box display="flex" gap="3x">
          <Button variant="primary" size="medium">
            {t("foundation.ctaPrimary")}
          </Button>
          <Button variant="secondary" size="medium">
            {t("foundation.ctaSecondary")}
          </Button>
        </Box>

        <Text variant="micro" color="secondary">
          Replace the placeholder fields with real form controls once the Figma
          layout and validation behavior are clear.
        </Text>
      </Stack>
    </PageShell>
  );
}

const meta = {
  title: "Layout / Settings Page",
  component: SettingsPageLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SettingsPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
