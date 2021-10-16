import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { AddButton } from "../Button/Button";

export const Navbar = (): JSX.Element => {
  return (
    <Flex
      background="black"
      width={"100%"}
      maxHeight={"60px"}
      minHeight={"60px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        maxWidth={"1100px"}
        padding={"0 1rem"}
        justifyContent={"space-between"}
      >
        <Flex>
          <Heading as="h1" size="xl" color="teal">
            Contacts
          </Heading>
        </Flex>
        <AddButton />
      </Flex>
    </Flex>
  );
};
