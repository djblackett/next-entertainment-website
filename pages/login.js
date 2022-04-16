import styled from "@emotion/styled";
import { Box, Icon, Flex } from "@chakra-ui/react";
import LoginBasePage from "../src/components/LoginBasePage";
import LoginForm from "../src/components/LoginForm";

function Login({ children }) {
  return (
    <LoginBasePage>
      <LoginForm />
    </LoginBasePage>
  );
}

export default Login;
