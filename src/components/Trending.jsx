import { Flex, Heading } from "@chakra-ui/react";
import TrendingItem from "./TrendingItem";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchTerm } from "../features/searchSlice";

const css = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  ".no-class": {
    "-ms-overflow-style": "none",
  },
};

function Trending({ data }) {
  const searchTerm = useSelector(selectSearchTerm);
  return (
    <Flex
      direction="column"
      align="flex-start"
      overflowX="hidden"
      marginLeft={[4, 4, 0]}
    >
      <Heading h="40px" color="white" marginBottom={5} fontWeight="300">
        Trending
      </Heading>
      <Flex
        css={css}
        className="no-scroll"
        direction="row"
        justify="space-between"
        overflowX="scroll"
        overflowY="visible"
        h="auto"
        maxW="90vw"
        style={{ scrollbarWidth: "none" }}
        // _focus={{ border: "2px" }}
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
