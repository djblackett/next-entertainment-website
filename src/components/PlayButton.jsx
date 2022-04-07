import { Button, Icon, Text, Flex } from "@chakra-ui/react";

const playIcon = (
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
      fill="#FFF"
    />
  </svg>
);
function PlayButton() {
  return (
    <Flex
      className="play-button"
      minW={100}
      position="absolute"
      // top="35%"
      // left="34%"

      borderRadius="25px"
      bg="rgba(255, 255, 255, 0.25)"
      display="none"
      justifyContent="space-around"
      align="center"
      padding="0.25rem"
      _groupHover={{
        display: "flex",
      }}
    >
      <Icon viewBox="0 0 32 32" boxSize={8}>
        {playIcon}
      </Icon>
      <Text color="white"> Play</Text>
    </Flex>
  );
}

export default PlayButton;
