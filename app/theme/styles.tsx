import { GlobalStyleProps } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { Rubik, Roboto_Mono, Ribeye } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
});
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const ribeye = Ribeye({
  weight: "400",
  subsets: ["latin"],
});

export const styles = {
  global: (props: GlobalStyleProps) => ({
    "html, body": {
      fontFamily: `${rubik.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
    },
    body: {
      bg: "p.diamond",
      color: "p.titanium",
    },
    h1: {},
  }),
};
