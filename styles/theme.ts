import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "primary",
  primaryShade: 9,
  colors: {
    primary: [
      "#ffe8fb",
      "#ffd2f8",
      "#ffbbf4",
      "#ffa5f1",
      "#ff8eed",
      "#fe77e9",
      "#fe61e6",
      "#fe4ae2",
      "#fe34df",
      "#fe1ddb",
    ],
  },
  components: {
    Anchor: {
      styles: {
        root: {
          color: "#868e96",
        },
      },
    },
  },
};
