import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";
import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
