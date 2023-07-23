import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { components } from "./components";
import { colors } from "./colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles,
  semanticTokens: colors,
  components,
});
