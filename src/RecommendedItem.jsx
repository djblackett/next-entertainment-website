import { Box, AspectRatio, Image } from "@chakra-ui/react";

function RecommendedItem({ item }) {
  return (
    <AspectRatio
      w={["150px", "300px"]}
      h={["100px", "200px"]}
      ratio={1.5 / 1}
      // marginRight={[3, 3, "3rem"]}
      display="relative"
    >
      <Box
        alt={item.title}
        backgroundImage={[
          `url(${item.thumbnail.regular.small})`,
          `url(${item.thumbnail.regular.medium})`,
          `url(${item.thumbnail.regular.large})`,
        ]}
        height="100%"
        width="100%"
        borderRadius="16px"
        backgroundSize="100% 100%"
      />
    </AspectRatio>
  );
}

export default RecommendedItem;
