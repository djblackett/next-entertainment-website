import Head from "next/head";
import Image from "next/image";
import SearchBar from "../src/SearchBar";
import styles from "../styles/Home.module.css";
import Menu from "../src/Menu";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import data from "../src/data.json";
import Trending from "../src/Trending";
import React, {useState} from 'react';
import Recommended from "../src/Recommended";

// const info = JSON.parse(data);
const css = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ".no-class": {
      '-ms-overflow-style': 'none',
    },
  }
export default function Home() {

  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={styles.container}>
      {/* <div> */}
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
      css="css"
      className="no-scroll"
        w="100%"
        h="100%"
        minH="100vh"
        templateRows={["auto auto 200px", "100px 295px 556px"]}
        gap={[2, 2, 0]}
        bg="#10141E"
        templateColumns={["1fr", "1fr", "120px 1fr"]}
        overflowX="hidden"
        overflowY="scroll"
        alignItems="start"
        alignContent={["start", "start", "center"]}
      >
        <GridItem rowSpan={["1", "1", "3"]} justifySelf="center" marginTop={[0, 0, 5]}>
          <Menu />
        </GridItem>
        <GridItem alignSelf="center">
          <SearchBar handleChange={handleChange}/>
        </GridItem>
        <GridItem>
          <Trending data={data} search={search}></Trending>
        </GridItem>
        <GridItem>
          <Recommended data={data} search={search}/>
        </GridItem>
      </Grid>
    </div>
  );
}
