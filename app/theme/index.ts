import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const overrides = {
  config,
  styles,
};

export default extendTheme(overrides);
