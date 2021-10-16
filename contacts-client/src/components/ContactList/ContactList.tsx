import { Flex } from "@chakra-ui/react";
import React from "react";
import { Card } from "../Card/Card";

export const ContactList = (): JSX.Element => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Card name={"Mehul Chaudhari"} tag={"Home"} />
    </Flex>
  );
};
