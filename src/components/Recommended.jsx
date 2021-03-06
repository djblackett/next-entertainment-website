import React, { useState, useEffect } from "react";
import { Heading, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import RecommendedItem from "./RecommendedItem";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/moviesSlice";
import { selectSearchTerm } from "../features/searchSlice";

const Grid1 = styled(Grid)`
  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2.7%;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 87vw;
  }
`;

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
        paddingLeft={[4, null, 8, null, 4]}
      >
        {search === "" ? text : `Found ${count} results for '${search}'`}
      </Heading>
      <Grid1
        w="100%"
        h="100%"
        maxWidth="1350px"
        justifyContent="space-between"
        className="no-class"
        templateColumns={["repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
        paddingLeft={[4, null, 8, null, 4]}
        paddingRight={[4, null, 8, null, 4]}
        columnGap={[2, 8]}
        rowGap={[4]}
      >
        {filteredVidoes.map((item) => {
          return (
            <GridItem key={item.title + "recc"} position="relative">
              <RecommendedItem item={item} />
            </GridItem>
          );
        })}
      </Grid1>
    </Flex>
  );
}

export default Recommended;
