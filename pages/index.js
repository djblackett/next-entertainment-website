import Head from "next/head";
import SearchBar from "../src/components/SearchBar";
import styles from "../styles/Home.module.css";
import Menu from "../src/components/Menu";
import { Grid, GridItem } from "@chakra-ui/react";
import Trending from "../src/components/Trending";
import React, {useState} from 'react';
import Recommended from "../src/components/Recommended";
import { selectMovies } from "../src/features/moviesSlice";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../src/features/searchSlice";

const css = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ".no-class": {
      '-ms-overflow-style': 'none',
    },
  }
export default function Home() {

  
  const data = useSelector(selectMovies);
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />

        <title>Frontend Mentor | Entertainment web app</title>
      </Head>
      <Grid
        css={css}
        className="no-scroll"
        w="100%"
        h="100%"
        maxW="100vw"
        minH="100vh"
        templateRows={["auto 75px auto 200px", null, null, null, "100px 300px auto"]}
        gap={[2, 2, 0]}
        bg="#10141E"
        templateColumns={["1fr", null, null, null, "120px 1fr"]}
        overflowX="hidden"
        alignItems="start"
        alignContent={["start", null, null, null, "center"]}
      >
        <GridItem rowSpan={["1", null, null, null, "3"]} justifySelf="center" marginTop={[0, null, 3, null, 5]} w={["100%", null, null, null, 24]} justify="center" maxW="100vw">
          <Menu selected={"home"}/>
        </GridItem>
        <GridItem alignSelf="center" maxW="100vw">
          <SearchBar text={"Search for movies or TV series"}/>
        </GridItem>
        
        {searchTerm === "" &&
        <> 
        <GridItem maxW="100vw">
          <Trending data={data} ></Trending>
        </GridItem>
        <GridItem maxW="100vw">
          <Recommended data={data}  text={"Recommended for you"} marginTop={[5, 5, 10]}/>
        </GridItem>
        </>
        }

        {searchTerm !== "" && 
        <GridItem maxW="100vw">
          <Recommended data={data}  text={"Recommended for you"} marginTop={[5, 5, 10]}/>
        </GridItem>}
      </Grid>
    </div>

  );
}
