import { Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Menu from "../src/components/Menu";
import SearchBar from "../src/components/SearchBar";
import Recommended from "../src/components/Recommended";
import styles from "../styles/Home.module.css";

function TVSeries() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
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
        templateRows={["auto auto auto", "100px auto auto"]}
        gridAutoRows={["200px", "556px"]}
        gap={[2, 2, 0]}
        bg="#10141E"
        templateColumns={["1fr", null, null, null, "164px 1fr"]}
        overflowX="hidden"
        alignItems="start"
        alignContent={["start", null, null, null, "center"]}
      >
        <GridItem
          rowSpan={["1", null, null, null, "3"]}
          justifySelf="center"
          marginTop={[0, null, 3, null, 5]}
          w={["100%", null, null, null, 24]}
          justify="center"
          maxW="100%"
        >
          <Menu />
        </GridItem>
        <GridItem alignSelf="center">
          <SearchBar text={"Search for TV series"} />
        </GridItem>
        <GridItem>
          <Recommended
            text={"TV Series"}
            filter={"series"}
            marginTop={[5, 5, 0]}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default TVSeries;
