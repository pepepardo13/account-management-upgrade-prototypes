import { Box, Text } from "@envato/design-system/components";

type TogglePillProps = {
  label: string;
  description: string;
  enabled?: boolean;
};

export function TogglePill({
  label,
  description,
  enabled = false,
}: TogglePillProps) {
  return (
    <Box display="flex" gap="4x" alignItems="center" justifyContent="space-between">
      <Box>
        <Text variant="label-large">{label}</Text>
        <Text variant="micro" color="secondary">
          {description}
        </Text>
      </Box>
      <Box
        borderRadius="extra-round"
        dangerouslySetStyle={{
          width: "44px",
          height: "24px",
          backgroundColor: enabled
            ? "var(--ds-color-action)"
            : "var(--ds-color-elevated-2x)",
          flexShrink: 0,
        }}
      />
    </Box>
  );
}
