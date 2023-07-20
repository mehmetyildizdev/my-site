import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: true },
  styles: {
    global: (props: any) => ({}),
  },
});

export default theme;
