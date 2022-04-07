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
    // <AspectRatio
    //   w={["250px", "500px"]}
    //   h={["150px", "250px"]}
    //   ratio={1.5 / 1}
    //   marginRight={[3, 3, "3rem"]}
    //   cursor="pointer"
    // >
    <MovieBox
      alt={item.title}
      backgroundImage={[
        `url(${item.thumbnail.trending.small})`,
        `url(${item.thumbnail.trending.large})`,
        `url(${item.thumbnail.trending.large})`,
      ]}
      // height="100%"
      // width="100%"
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
    // </AspectRatio>
  );
}

export default TrendingItem;
