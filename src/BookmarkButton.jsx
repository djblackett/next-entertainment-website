import { Flex, Icon } from "@chakra-ui/react";

function BookmarkButton() {
  return (
    <Flex
      w={10}
      h={10}
      borderRadius="50%"
      position="absolute"
      top="8%"
      right="13%"
      align="center"
      justify="center"
      backgroundColor="rgba(0, 0, 0, 0.5)"
    >
      <Icon
        // w={3}
        // h={4}
        align="center"
        justify="center"
        boxSize={7}
        viewBox="-6 -6 24 24"
        display="flex"
        // objectFit="fill"
      >
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          strokeWidth="1.5"
          fill="none"
        />
      </Icon>
    </Flex>
  );
}

export default BookmarkButton;
