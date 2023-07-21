import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const styles = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: { bg: mode("#d3d4d5", "#123321")(props) },
    }),
  },
});

export default styles;
