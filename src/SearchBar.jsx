import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

function SearchBar() {
  return (
    <InputGroup alignSelf="center">
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        type="search"
        placeholder="Search for movies or TV series"
        bg="transparent"
        border="none"
      />
    </InputGroup>
  );
}

export default SearchBar;
