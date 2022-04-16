import styled from "@emotion/styled";
import { Box, Icon, Flex } from "@chakra-ui/react";
import LoginBasePage from "../src/components/LoginBasePage";
import LoginForm from "../src/components/LoginForm";
import Head from "next/head";

function Login({}) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
        <title>Frontend Mentor | Entertainment web app</title>
      </Head>

      <LoginBasePage>
        <LoginForm />
      </LoginBasePage>
    </>
  );
}

export default Login;
