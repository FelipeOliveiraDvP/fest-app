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
    acent: [
      "#e6f9e7",
      "#ccf3cf",
      "#b3ecb6",
      "#99e69e",
      "#80e086",
      "#66da6e",
      "#4dd456",
      "#33cd3d",
      "#1ac725",
      "#00c10d",
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
    Button: {
      styles: {
        root: {
          fontWeight: 400,
          fontSize: "18px",
        },
      },
    },
    Container: {
      styles: {
        root: {
          maxWidth: "1440px",
        },
      },
    },
  },
};
