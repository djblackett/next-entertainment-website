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
import styled from "@emotion/styled";

const css = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ".no-class": {
      '-ms-overflow-style': 'none',
    },
  }

  export const Grid1 = styled(Grid)`
    @media (min-width: 1350px) {
      grid-template: 100px auto auto / 164px 1fr;
      align-content: center;
      
    }
  `

  export const GridItem1 = styled(GridItem)`
  @media (min-width: 1350px) {
    width: 96px ;
    grid-row: span 3;
    align-items: center;
    justify-content: center;
    justify-items: center;
    
  }
  
  `;

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
      <Grid1
        css={css}
        className="no-scroll"
        w="100%"
        h="100%"
        maxW="100%"
        minH="100vh"
        templateRows={"auto 75px auto 200px"}
        gap={[2, 2, 0]}
        bg="#10141E"
        templateColumns={"1fr"}
        overflowX="hidden"
        alignItems="start"
        alignContent={"start"}
      >
        <GridItem1 rowSpan="1" display="flex" justifySelf="center" marginTop={[0, null, 3]} w={"100%"}  maxW="100vw">
          <Menu selected={"home"}/>
        </GridItem1>
        <GridItem alignSelf="center" maxW="100%">
          <SearchBar text={"Search for movies or TV series"}/>
        </GridItem>
        
        {searchTerm === "" &&
        <> 
        <GridItem maxW="100%">
          <Trending data={data} ></Trending>
        </GridItem>
        <GridItem maxW="100%">
          <Recommended data={data}  text={"Recommended for you"} marginTop={[5, 5, 10]}/>
        </GridItem>
        </>
        }

        {searchTerm !== "" && 
        <GridItem maxW="100%">
          <Recommended data={data}  text={"Recommended for you"} marginTop={[5, 5, 10]}/>
        </GridItem>}
      </Grid1>
    </div>

  );
}
