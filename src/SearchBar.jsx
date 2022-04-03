import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";

function SearchBar({ handleChange }) {
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
        color="gray.500"
        onChange={handleChange}
      />
    </InputGroup>
  );
}

export default SearchBar;
