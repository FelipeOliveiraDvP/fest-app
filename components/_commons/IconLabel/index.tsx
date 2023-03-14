import { ReactNode } from "react";
import { DefaultMantineColor, MantineNumberSize, Text } from "@mantine/core";

interface Props {
  icon: ReactNode;
  label: string;
  color?: DefaultMantineColor | "dimmed";
  size?: MantineNumberSize;
  weight?: 400 | 500 | 600 | 700;
}

export function IconLabel({ icon, label, color, size, weight = 400 }: Props) {
  return (
    <Text
      color={color}
      size={size}
      weight={weight}
      sx={() => ({
        display: "flex",
        alignItems: "center",
        "& span": {
          marginRight: 5,
          display: "flex",
          alignItems: "center",
        },
      })}
    >
      <span>{icon}</span>
      {label}
    </Text>
  );
}
