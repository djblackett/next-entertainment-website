import React from "react";
import { Heading, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import TrendingItem from "./TrendingItem";
import RecommendedItem from "./RecommendedItem";
import Information from "./Information";
import BookmarkButton from "./BookmarkButton";

const css = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  ".no-class": {
    "-ms-overflow-style": "none",
  },
};

function Recommended({ data, search }) {
  return (
    <Flex w="100%" marginTop={[5, 5, 10]} direction="column">
      <Heading
        color="white"
        marginBottom={[5, 5, 5]}
        marginLeft={[4, 4, 0]}
        // overflowY="scroll"
      >
        Recommended for you
      </Heading>
      <Grid
        w="100%"
        h="100%"
        justifyItems="center"
        css={css}
        className="no-class"
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        templateRows="auto"
        gap={[2, 4, 6]}
      >
        {data
          .filter((item) =>
            item.title.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((item) => {
            return (
              <GridItem key={item.title + "recc"} position="relative">
                <RecommendedItem item={item} />
                <BookmarkButton />
                <Information item={item} />
              </GridItem>
            );
          })}
      </Grid>
    </Flex>
  );
}

export default Recommended;
