import type { PropsWithChildren, ReactNode } from "react";

import { Box, Stack, Text } from "@envato/design-system/components";

type SurfaceCardProps = PropsWithChildren<{
  title?: string;
  description?: string;
  action?: ReactNode;
}>;

export function SurfaceCard({
  title,
  description,
  action,
  children,
}: SurfaceCardProps) {
  return (
    <Box backgroundColor="elevated-1x" borderRadius="subtle" padding="4x">
      <Stack spacing="3x">
        {(title || description || action) && (
          <Box display="flex" justifyContent="space-between" gap="3x">
            <Stack spacing="1x">
              {title && (
                <Text variant="title-4" tagName="h3">
                  {title}
                </Text>
              )}
              {description && (
                <Text variant="body-small" color="secondary">
                  {description}
                </Text>
              )}
            </Stack>
            {action}
          </Box>
        )}
        {children}
      </Stack>
    </Box>
  );
}
