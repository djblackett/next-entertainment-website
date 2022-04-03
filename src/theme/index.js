import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {},
  fonts: {
    heading: `Outfit ${base.fonts?.heading}`,
    body: `Outfit ${base.fonts?.heading}`,
  },
});


const colors = { }

export default theme;
