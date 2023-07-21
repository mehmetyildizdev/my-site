import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: true },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {},
    }),
  },
  semanticTokens: {
    colors: {
      p: {
        title: {
          _dark: "#E2BF36",
          _light: "#C49E5B",
        },
        subtitle: {
          _dark: "#d0b17b",
          _light: "#E2BF36",
        },
        platinum: {
          _dark: "#F0F3F5",
          _light: "#D3D6D8",
        },
        gold: {
          _dark: "#DCB118",
          _light: "#C49E5B",
        },
        emerald: {
          _dark: "#00A267",
          _light: "#4F8129",
        },
        sapphire: {
          _dark: "#0F52BA",
          _light: "#162C59",
        },
        ruby: {
          _dark: "#E0115F",
          _light: "#AC0911",
        },
        diamond: {
          _dark: "#262A2C",
          _light: "#F6F6F2",
        },
        amethyst: {
          _dark: "#663593",
          _light: "#BB6FE2",
        },
        pearl: {
          _dark: "#303030",
          _light: "#F7EFDF",
        },
      },
    },
  },
});

export default theme;
