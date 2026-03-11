import type { PropsWithChildren, ReactNode } from "react";

import { Bleed, Box, Stack, Text } from "@envato/design-system/components";

import { foundationTokens } from "../../foundation/tokens.ts";

type PageShellProps = PropsWithChildren<{
  title: string;
  description?: string;
  sidebar?: ReactNode;
  actions?: ReactNode;
  centered?: boolean;
}>;

export function PageShell({
  title,
  description,
  sidebar,
  actions,
  centered = false,
  children,
}: PageShellProps) {
  return (
    <Bleed uniform="3x">
      <Box display="flex" gap="4x" minHeight="viewport" containerType="inline-size">
        {sidebar}
        <Box flexGrow="1" overflow="auto">
          <Box
            padding={foundationTokens.spacing.page}
            dangerouslySetStyle={{
              maxWidth: centered
                ? `${foundationTokens.layout.contentMaxWidth}px`
                : `${foundationTokens.layout.pageMaxWidth}px`,
              margin: centered ? "0 auto" : undefined,
            }}
          >
            <Stack spacing={foundationTokens.spacing.section}>
              <Box display="flex" gap="3x" justifyContent="space-between">
                <Stack spacing="2x">
                  <Text variant="title-1" tagName="h1">
                    {title}
                  </Text>
                  {description && (
                    <Text variant="body-large" color="secondary">
                      {description}
                    </Text>
                  )}
                </Stack>
                {actions}
              </Box>
              {children}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Bleed>
  );
}
