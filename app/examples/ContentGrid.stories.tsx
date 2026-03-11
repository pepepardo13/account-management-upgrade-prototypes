import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Box,
  Button,
  Columns,
  Stack,
  Text,
} from "@envato/design-system/components";

import { PageShell } from "../components/foundation/PageShell.tsx";
import { SidebarNavigation } from "../components/foundation/SidebarNavigation.tsx";
import { SurfaceCard } from "../components/foundation/SurfaceCard.tsx";
import { useTranslations } from "../contexts/TranslationsContext.tsx";
import { foundationTokens } from "../foundation/tokens.ts";
import { foundationSidebarGroups } from "./storyData.ts";

const filterLabels = ["All", "New", "Popular", "Recommended", "Saved"];

const placeholderCards = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  title: `Card ${index + 1}`,
}));

function FilterChip({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <Box
      tagName="button"
      borderRadius="extra-round"
      paddingX="3x"
      paddingY="1x"
      backgroundColor={active ? "interactive-primary" : "elevated-2x"}
      dangerouslySetStyle={{ border: "none", cursor: "pointer" }}
    >
      <Text variant="label-large" color={active ? "inverse" : "primary"}>
        {label}
      </Text>
    </Box>
  );
}

function PlaceholderCard({ title }: { title: string }) {
  return (
    <SurfaceCard title={title} description="Replace with a real card component">
      <Box
        backgroundColor="elevated-2x"
        borderRadius="subtle"
        dangerouslySetStyle={{ aspectRatio: "4 / 3" }}
      />
    </SurfaceCard>
  );
}

function ContentGridLayout() {
  const t = useTranslations();

  return (
    <PageShell
      title="Content Grid"
      description="A starting point for search, browse, and gallery pages."
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
        <SurfaceCard>
          <Text variant="body-large" color="secondary">
            {t("foundation.searchPlaceholder")}
          </Text>
        </SurfaceCard>

        <Box display="flex" gap="2x" flexWrap="wrap">
          {filterLabels.map((label, index) => (
            <FilterChip key={label} label={label} active={index === 0} />
          ))}
        </Box>

        <Text variant="label-large" color="secondary">
          {t("foundation.resultsCount", { count: placeholderCards.length })}
        </Text>

        <Columns minColumnWidth={foundationTokens.layout.cardMinWidth} spacing="4x">
          {placeholderCards.map((card) => (
            <PlaceholderCard key={card.id} title={card.title} />
          ))}
        </Columns>
      </Stack>
    </PageShell>
  );
}

const meta = {
  title: "Layout / Content Grid",
  component: ContentGridLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContentGridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
