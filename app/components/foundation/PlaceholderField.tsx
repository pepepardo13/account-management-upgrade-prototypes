import { Box, Stack, Text } from "@envato/design-system/components";

type PlaceholderFieldProps = {
  label: string;
  hint?: string;
  value: string;
};

export function PlaceholderField({
  label,
  hint,
  value,
}: PlaceholderFieldProps) {
  return (
    <Box display="flex" gap="4x" alignItems="flex-start">
      <Box
        paddingTop="2x"
        dangerouslySetStyle={{ width: "180px", flexShrink: 0 }}
      >
        <Stack spacing="1x">
          <Text variant="label-large">{label}</Text>
          {hint && (
            <Text variant="micro" color="secondary">
              {hint}
            </Text>
          )}
        </Stack>
      </Box>
      <Box flexGrow="1">
        <Box
          backgroundColor="elevated-2x"
          borderRadius="subtle"
          padding="3x"
          dangerouslySetStyle={{ minHeight: "40px" }}
        >
          <Text variant="body-large" color="secondary">
            {value}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
