import Head from "next/head";
import Image from "next/image";
import SearchBar from "../src/SearchBar";
import styles from "../styles/Home.module.css";
import Menu from "../src/Menu";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import data from "../src/data.json";
import Trending from "../src/Trending";
import React, {useState} from 'react';

// const info = JSON.parse(data);

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
        w="100%"
        h={["100%"]}
        minH="100vh"
        templateRows={["auto auto auto", "130px 295px 556px"]}
        gap={[2, 2, 0]}
        bg="#10141E"
        templateColumns={["1fr", "1fr", "164px 1fr"]}
        overflow="hidden"
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
        Search for movies or TV series Trending
        {/* -- Display trending shows - */}
        Recommended for you
        {/* <!-- Display recommended shows --> */}
      </Grid>
    </div>
  );
}
