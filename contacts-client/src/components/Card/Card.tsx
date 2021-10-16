import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { CardPropsType } from "./Card.types";
import { FaRegUserCircle, FaArrowCircleRight } from "react-icons/fa";

export const Card = ({ name, tag }: CardPropsType): JSX.Element => {
  return (
    <Box
      borderRadius={"8px"}
      overflow={"hidden"}
      marginTop={"2rem"}
      width={["90%", "80%"]}
      alignSelf="center"
      background="wheat"
      padding={["0.8rem", "1.5rem"]}
      alignItems={"center"}
    >
      <HStack spacing={["4", '10']}>
        <Flex>
          <FaRegUserCircle color="black" />
        </Flex>
        <Flex>
          <Heading as="h3" size="md">
            {name}
          </Heading>
        </Flex>
        <Flex>
          <Heading as="h4" size="md">
            {tag}
          </Heading>
        </Flex>
        <Flex>
          <FaArrowCircleRight />
        </Flex>
      </HStack>
    </Box>
  );
};
