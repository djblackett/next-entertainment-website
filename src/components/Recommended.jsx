import React, { useState, useEffect } from "react";
import { Heading, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import RecommendedItem from "./RecommendedItem";

import { useSelector } from "react-redux";
import { selectMovies } from "../features/moviesSlice";
import { selectSearchTerm } from "../features/searchSlice";

const css = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  ".no-class": {
    "-ms-overflow-style": "none",
  },
};

function Recommended({ text, filter, marginTop }) {
  const data = useSelector(selectMovies);
  const search = useSelector(selectSearchTerm);
  const [count, setCount] = useState(0);
  const [filteredVidoes, setFilteredVideos] = useState([]);

  useEffect(() => {
    let newData = data
      .filter((item) => {
        if (filter === "bookmarkTV") {
          return item.category === "TV Series" && item.isBookmarked;
        } else if (filter === "bookmarkMovie") {
          return item.category === "Movie" && item.isBookmarked;
        } else if (filter === "movies") {
          return item.category === "Movie";
        } else if (filter == "series") {
          return item.category === "TV Series";
        } else {
          return true;
        }
      })
      .filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });

    setFilteredVideos(newData);
    setCount(newData.length);
  }, [search, filter, data]);

  return (
    <Flex
      w="auto"
      maxW="100vw"
      marginTop={marginTop}
      direction="column"
      h="100%"
      marginBottom={5}
    >
      <Heading
        color="white"
        fontWeight="300"
        marginBottom={[5, 5, 5]}
        marginLeft={[4, null, null, null, 0]}
      >
        {search === "" ? text : `Found ${count} results for '${search}'`}
      </Heading>
      <Grid
        w="100%"
        h="100%"
        maxW={"95vw"}
        objectFit="fill"
        // justifyItems={["center", null, null, null, "start"]}
        justifyContent={["space-between"]}
        className="no-class"
        templateColumns={[
          "repeat(2, 164px)",
          null,
          "repeat(3, 220px)",
          null,
          "repeat(4, 280px)",
        ]}
        templateRows="auto"
        marginLeft={5}
        marginRight={5}
        gap={5}
      >
        {filteredVidoes.map((item) => {
          return (
            <GridItem key={item.title + "recc"} position="relative">
              <RecommendedItem item={item} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Recommended;
