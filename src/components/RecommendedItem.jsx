import { Box, Flex, AspectRatio } from "@chakra-ui/react";
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
const AspectRatio1 = styled(AspectRatio)`
  @media (min-width: 1350px) {
    max-width: 280px;
  }
`;

function RecommendedItem({ item }) {
  return (
    <>
      <AspectRatio1 minW="164px" ratio={1 / 0.68} cursor="pointer">
        <MovieBox
          alt={item.title}
          backgroundImage={[
            `url(${item.thumbnail.regular.small})`,
            `url(${item.thumbnail.regular.medium})`,
            `url(${item.thumbnail.regular.large})`,
          ]}
          width="100%"
          borderRadius="10px"
          backgroundSize="100% 100%"
          align="center"
          justify="center"
          position="relative"
          className="video-item"
          tabIndex="0"
          zIndex="0"
        >
          <Overlay
            className="overlay"
            w="100%"
            h="100%"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            zIndex="0"
            borderRadius="10px"
          />
          <PlayButton zIndex="2" />
          <BookmarkButton item={item} zIndex="2" />
        </MovieBox>
      </AspectRatio1>
      <Information item={item} position="block" />
    </>
  );
}

export default RecommendedItem;
