import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import { handleChange } from "../features/searchSlice";
import { useDispatch } from "react-redux";

function SearchBar({ text }) {
  const dispatch = useDispatch();
  return (
    <InputGroup
      alignSelf="center"
      cursor="pointer"
      outline="none"
      border="none"
      maxW={"90vw"}
      marginLeft={[1, null, 6, null, 1]}
    >
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        sx={{ caretColor: "red" }}
        type="search"
        placeholder={text}
        bg="transparent"
        outline="none"
        border="none"
        color="gray.500"
        onChange={(e) => dispatch(handleChange(e.target.value))}
      />
    </InputGroup>
  );
}

export default SearchBar;
