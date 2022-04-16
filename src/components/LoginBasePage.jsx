import { Icon, Flex } from "@chakra-ui/react";

function LoginBasePage({ children }) {
  return (
    <Flex direction="column" w="100%" h="100vh" bg="#10141E" align="center">
      <Icon
        viewBox="0 0 32 25.6"
        boxSize={[8, 8, 8]}
        alignSelf="center"
        m={["40px", "48px", "88px", null, "78px"]}
      >
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </Icon>
      <Flex
        bg="#161D2F"
        minH="400px"
        minW={["90%", "80%", "50%", "40%"]}
        maxH="420"
        maxW={["100%", null, "60%", "50%"]}
        direction="column"
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
