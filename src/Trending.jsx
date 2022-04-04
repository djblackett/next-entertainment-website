import {
  Box,
  Flex,
  Heading,
  Image,
  AspectRatio,
  IconButton,
  Icon,
  Text,
} from "@chakra-ui/react";
import BookmarkButton from "./BookmarkButton";
import Information from "./Information";
import TrendingItem from "./TrendingItem";


const css = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ".no-class": {
      '-ms-overflow-style': 'none',
    },
  }

  const position = {position: "absolute",
      bottom: ["45%", null, "10%"],
      left:"5%"}


function Trending({data, search}) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      overflowX="hidden"
      marginLeft={[4, 4, 0]}
      
      // class="no-scroll"
    >
      <Heading h="40px" color="white" marginBottom={5} fontWeight={[300, 400, 700]}>
        Trending
      </Heading>
      <Flex
      css={css}
      className="no-scroll"
        direction="row"
        justify="space-between"
        overflowX="scroll"
        overflowY="hidden"
        h="250px"
        maxW="90vw"
      style={{scrollbarWidth: "none"}}
      >
        {data
          .filter((item) => item.isTrending)
          .filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()))
          .map((item) => {
            console.log(item);
            return (
              <Box key={item.title + "key"} position="relative">
                <TrendingItem item={item}/>

                <BookmarkButton />

                <Information item={item} position={"absolute"} />
              </Box>
            );
          })}
      </Flex>
    </Flex>
  );
}

export default Trending;
