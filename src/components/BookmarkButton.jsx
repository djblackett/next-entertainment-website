import { Icon, Box, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleBookmarked } from "../features/moviesSlice";

const bookmarkEmpty = (
  <path
    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
    strokeWidth="1.5"
    fill="none"
  />
);

const bookmarkFull = (
  <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" />
);

function BookmarkButton({ item }) {
  const dispatch = useDispatch();
  return (
    <Box role="group" className="bookmark-button">
      <Button
        p="0"
        minW={6}
        display="flex"
        cursor="pointer"
        w={[6, 6, 8]}
        h={[6, 6, 8]}
        sx={{ aspectRatio: "1 / 1" }}
        borderRadius="50%"
        position="absolute"
        top="8%"
        right="10%"
        align="center"
        justify="center"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        _groupHover={{
          backgroundColor: "white",
        }}
        onClick={() => dispatch(toggleBookmarked(item.title))}
        tabIndex="0"
      >
        <Icon
          stroke="#FFF"
          strokeWidth={item.isBookmarked ? "0" : "1.5"}
          fill="#FFF"
          align="center"
          justify="center"
          boxSize={[3]}
          viewBox="0 0 12 14"
          display="flex"
          _groupHover={{
            stroke: "black",
            strokeWidth: "1.5",
          }}
        >
          {item.isBookmarked ? bookmarkFull : bookmarkEmpty}
        </Icon>
      </Button>
    </Box>
  );
}

export default BookmarkButton;
