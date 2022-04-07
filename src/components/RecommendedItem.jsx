import { Box, Flex, AspectRatio, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import BookmarkButton from "./BookmarkButton";
import Information from "./Information";
import PlayButton from "./PlayButton";

const MovieBox = styled(Flex)`
  &:hover .play-button {
    display: flex;
  }
`;

function RecommendedItem({ item }) {
  return (
    <>
      <AspectRatio
        w={["150px", "280px"]}
        h={["100px", "174px"]}
        // ratio={1.5 / 1}
        // marginRight={[3, 3, "3rem"]}

        cursor="pointer"
      >
        <MovieBox
          alt={item.title}
          backgroundImage={[
            `url(${item.thumbnail.regular.small})`,
            `url(${item.thumbnail.regular.medium})`,
            `url(${item.thumbnail.regular.large})`,
          ]}
          height="100%"
          width="100%"
          borderRadius="10px"
          backgroundSize="100% 100%"
          align="center"
          justify="center"
          position="relative"
          className="video-item"
          _hover={{
            "play-button": {
              display: "flex",
            },
          }}
          sx={{
            ".video-item:hover ~ .play-button": { display: "flex" },
          }}
          tabIndex="0"
        >
          <PlayButton />
          <BookmarkButton item={item} />
        </MovieBox>
      </AspectRatio>
      <Information item={item} position="block" />
    </>
  );
}

export default RecommendedItem;
