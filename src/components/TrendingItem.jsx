import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import BookmarkButton from "./BookmarkButton";
import Information from "./Information";
import PlayButton from "./PlayButton";

const MovieBox = styled(Flex)`
  &:hover .play-button {
    display: flex;
  }

  &:hover .overlay {
    display: initial;
  }
`;

const Overlay = styled(Box)`
  display: none;
`;

function TrendingItem({ item }) {
  return (
    <MovieBox
      alt={item.title}
      backgroundImage={[
        `url(${item.thumbnail.trending.small})`,
        `url(${item.thumbnail.trending.large})`,
        `url(${item.thumbnail.trending.large})`,
      ]}
      h={["140px", "230px"]}
      w={["240px", "470px"]}
      align="center"
      justify="center"
      marginRight={["1rem", "2rem", "3rem"]}
      cursor="pointer"
      borderRadius="10px"
      backgroundSize="100% 100%"
      position="relative"
      tabIndex="0"
    >
      <Overlay
        className="overlay"
        w="100%"
        h="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        zIndex="0"
        borderRadius="10px"
      />
      <BookmarkButton item={item} />
      <PlayButton />
      <Information item={item} position={"absolute"} />
    </MovieBox>
  );
}

export default TrendingItem;
