import {
  Box,
  Button,
  Flex,
  Stack,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

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
          <Stack spacing={5}>
            <Flex>
              <AiOutlineArrowLeft size="2rem" />
            </Flex>
            <Flex>
              <Table variant="simple">
                <Tbody fontSize="1.1rem">
                  <Tr>
                    <Th outline="none" border="none">
                      FirstName:
                    </Th>
                    <Td outline="none" border="none">
                      Mehul
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      LastName:
                    </Th>
                    <Td outline="none" border="none">
                      Chaudhari
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      Email:
                    </Th>
                    <Td outline="none" border="none">
                      MehulChaduahri@gmail.com
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      Contact Number:
                    </Th>
                    <Td outline="none" border="none">
                      9184858281
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>
            <Flex justifyContent="space-between" p={4}>
              <Button colorScheme="red" variant="outline">
                Delete
              </Button>
              <Button colorScheme="teal" variant="solid">
                <BsFillPencilFill /> Edit
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default User;
