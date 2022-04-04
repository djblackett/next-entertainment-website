import { Box, Image, AspectRatio } from "@chakra-ui/react";

function TrendingItem({ item }) {
  return (
    <AspectRatio
      w={["250px", "500px"]}
      h={["150px", "250px"]}
      ratio={1.5 / 1}
      marginRight={[3, 3, "3rem"]}
    >
      <Box
        alt={item.title}
        backgroundImage={[
          `url(${item.thumbnail.trending.small})`,
          `url(${item.thumbnail.trending.large})`,
          `url(${item.thumbnail.trending.large})`,
        ]}
        height="100%"
        width="100%"
        borderRadius="16px"
        backgroundSize="100% 100%"
      />
    </AspectRatio>
  );
}

export default TrendingItem;
