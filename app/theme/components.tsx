import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
    variants: {
      solid: (props: StyleFunctionProps) => ({
        bg: "p.pearl",
      }),
    },
  },
};
