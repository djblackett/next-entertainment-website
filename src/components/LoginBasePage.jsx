import styled from "@emotion/styled";
import { Box, Icon, Flex } from "@chakra-ui/react";

function LoginBasePage({ children }) {
  return (
    <Flex direction="column" w="100%" h="100vh" bg="#10141E" align="center">
      <Icon
        viewBox="0 0 32 25.6"
        boxSize={[6, 6, 8]}
        marginBottom="0"
        alignSelf="center"
        m="10"
      >
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </Icon>
      <Flex
        bg="#161D2F"
        minH="400px"
        minW="400px"
        maxH="420"
        maxW="400px"
        direction="column"
        m="10"
        borderRadius="10px"
        justify="space-between"
        align="center"
        p="8"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default LoginBasePage;
