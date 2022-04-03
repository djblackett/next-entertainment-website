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


const css = {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ".no-class": {
      '-ms-overflow-style': 'none',
    },
  }


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
                <AspectRatio
                  w={["250px", "500px"]}
                  h={["150px", "250px"]}
                  ratio={1.5 / 1}
                  marginRight={[3, 3, "3rem"]}
                >
                  <Image
                    alt={item.title}
                    src={item.thumbnail.trending.large}
                    height="100%"
                    width="100%"
                    borderRadius="16px"
                  />
                </AspectRatio>

                <BookmarkButton />

                <Information item={item} />
              </Box>
            );
          })}
      </Flex>
    </Flex>
  );
}

export default Trending;
