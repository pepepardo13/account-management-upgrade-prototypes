import { Box, Stack, Text } from "@envato/design-system/components";

import { foundationTokens } from "../../foundation/tokens.ts";

export type SidebarGroup = {
  label: string;
  items: Array<{
    label: string;
    active?: boolean;
  }>;
};

type SidebarNavigationProps = {
  title?: string;
  groups: SidebarGroup[];
};

export function SidebarNavigation({
  title = "Workspace",
  groups,
}: SidebarNavigationProps) {
  return (
    <Box
      backgroundColor="elevated-1x"
      borderRadius="subtle"
      padding="4x"
      dangerouslySetStyle={{
        width: `${foundationTokens.layout.sidebarWidth}px`,
        minWidth: `${foundationTokens.layout.sidebarWidth}px`,
        alignSelf: "stretch",
      }}
    >
      <Stack spacing="4x">
        <Stack spacing="1x">
          <Text variant="title-4" tagName="h2">
            {title}
          </Text>
          <Text variant="body-small" color="secondary">
            Foundation navigation placeholder
          </Text>
        </Stack>

        {groups.map((group) => (
          <Stack key={group.label} spacing="2x">
            <Text variant="label-small" color="secondary">
              {group.label}
            </Text>
            <Stack spacing="1x">
              {group.items.map((item) => (
                <Box
                  key={item.label}
                  backgroundColor={item.active ? "elevated-2x" : undefined}
                  borderRadius="subtle"
                  paddingX="3x"
                  paddingY="2x"
                >
                  <Text variant="label-large">{item.label}</Text>
                </Box>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
