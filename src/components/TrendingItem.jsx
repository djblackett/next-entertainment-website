import { Box, Image, AspectRatio, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import BookmarkButton from "./BookmarkButton";
import Information from "./Information";
import PlayButton from "./PlayButton";

const MovieBox = styled(Flex)`
  &:hover .play-button {
    display: flex;
  }
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
      h={["150px", "230px"]}
      w={["250px", "470px"]}
      align="center"
      justify="center"
      marginRight={["1rem", "2rem", "3rem"]}
      cursor="pointer"
      borderRadius="10px"
      backgroundSize="100% 100%"
      position="relative"
      tabIndex="0"
    >
      <BookmarkButton item={item} />
      <PlayButton />
      <Information item={item} position={"absolute"} />
    </MovieBox>
  );
}

export default TrendingItem;
