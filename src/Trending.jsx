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


function Trending(props) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      overflowX="hidden"
      
      // class="no-scroll"
    >
      <Heading h="40px" color="white" marginBottom={5}>
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
        {props.data
          .filter((item) => item.isTrending)
          .map((item) => {
            console.log(item);
            return (
              <Box key={item.title + "key"} position="relative">
                <AspectRatio
                  w="500px"
                  h="250px"
                  ratio={1.5 / 1}
                  marginRight="3rem"
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
