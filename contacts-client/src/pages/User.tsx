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
import { Link } from "react-router-dom";

const User = (): JSX.Element => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        pt={10}
        width='100%'
      >
        <Box
          background="white"
          border={"1px solid #096ce6"}
          boxShadow="lg"
          p="6"
          rounded="md"
          w={[500, 700]}
          height={["100%", "500px"]}
          alignContent="center"
        >
          <Stack spacing={5}>
            <Flex>
              <Link to={"/"}>
                <AiOutlineArrowLeft size="2rem" />
              </Link>
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
                  <Tr>
                    <Th outline="none" border="none">
                      Tag:
                    </Th>
                    <Td outline="none" border="none">
                      tag
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>
            <Flex justifyContent="space-between" p={4}>
              <Button colorScheme="red" variant="outline">
                Delete
              </Button>
              <Button color="#096ce6" variant="solid" size="lg">
                <BsFillPencilFill style={{ marginRight: "0.5rem" }} /> Edit
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default User;
