import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const User = (): JSX.Element => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        pt={10}
      >
        <Box
          background="#FCA5A5"
          boxShadow="md"
          p="6"
          rounded="md"
          width={["", "1000px"]}
          height={["", "500px"]}
          alignContent="center"
        >
          <Table variant="simple" alignSelf="center">
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
};

export default User;
