import { Flex, Heading } from "@chakra-ui/react";
import TrendingItem from "./TrendingItem";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchTerm } from "../features/searchSlice";

const css = {
  "&::-webkit-scrollbar": {
    display: "none",
    height: 0,
    width: 0,
  },
  ".no-class": {
    msOverflowStyle: "none",
    scrollbarWidth: "none" /* Firefox */,
  },
};

function Trending({ data }) {
  const searchTerm = useSelector(selectSearchTerm);
  return (
    <Flex
      css={css}
      style={{ scrollbarWidth: "none" }}
      className="no-scroll"
      direction="column"
      align="flex-start"
      overflowX="scroll"
      // marginLeft={[4, null, null, null, 0]}
      paddingLeft={[4, null, 8, null, 4]}
      paddingRight="4"
      maxWidth={["100vw", null, null, null, "1400px"]}
    >
      <Heading h="40px" color="white" marginBottom={5} fontWeight="300">
        Trending
      </Heading>
      <Flex
        // css={css}
        className="no-scroll"
        direction="row"
        justify="space-between"
        // overflowX="scroll"
        overflowY="visible"
        h="auto"
        w="auto"
        // maxW="100%"
        style={{ scrollbarWidth: "none" }}
        paddingop={2}
        paddingBottom={2}
      >
        {data
          .filter((item) => item.isTrending)
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => {
            console.log(item);
            return (
              <Flex
                key={item.title + "key"}
                position="relative"
                justify="center"
                align="center"
              >
                <TrendingItem item={item} />
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
}

export default Trending;
