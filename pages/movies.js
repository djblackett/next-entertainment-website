import { Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Menu from "../src/components/Menu";
import SearchBar from "../src/components/SearchBar";
import Recommended from "../src/components/Recommended";
import styles from "../styles/Home.module.css";

import { Grid1, GridItem1, css } from "./index";

function Bookmarked() {
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

      <Grid1
        css={css}
        className="no-scroll"
        w="100%"
        h="100%"
        // minH="100vh"
        templateRows={["auto 65px auto 200px"]}
        // gridAutoRows={["200px", "556px"]}
        gap={[2, 2, 0]}
        bg="#10141E"
        templateColumns={["1fr"]}
        overflowX="hidden"
        alignItems="start"
        alignContent={"start"}
      >
        <GridItem1
          rowSpan="1"
          display="flex"
          justifySelf="center"
          marginTop={[0, null, 3]}
          w="100%"
          // justify="center"
          maxW="100vw"
        >
          <Menu />
        </GridItem1>
        <GridItem alignSelf="center">
          <SearchBar text={"Search for movies"} />
        </GridItem>
        <GridItem>
          <Recommended text={"Movies"} filter={"movies"} marginTop="0" />
        </GridItem>
      </Grid1>
    </div>
  );
}

export default Bookmarked;
