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
  Badge,
  Center,
  Spinner,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { BadgeColor } from '../components/Card/Card'
import { ContactTypes } from '../components/ContactList/ContactList.types'
import { getContactDetails } from '../services/axiosService'

const User = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [contactInfo, setContactInfo] = useState<ContactTypes>()
  const { userid } = useParams()

  const getInfo = async (userid: string | undefined) => {
    const response = await getContactDetails(userid)
    setTimeout(() => {
      setContactInfo(response)
      setIsLoading(false)
    }, 1500)
    console.log('response', response)
  }
  useEffect(() => {
    getInfo(userid)
  }, [userid])
  console.log('contact', contactInfo)

  return isLoading ? (
    <Center minH="80vh">
      <Spinner />
    </Center>
  ) : (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        pt={10}
      >
        <Box
          background="white"
          border={'1px solid #096ce6'}
          boxShadow="lg"
          p="6"
          rounded="md"
          alignContent="center"
          w={[300, 700]}
          height={['100%', '500px']}
          overflow="hidden"
        >
          <Stack spacing={5}>
            <Flex>
              <Link to={'/'}>
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
                      {contactInfo?.firstName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      LastName:
                    </Th>
                    <Td outline="none" border="none">
                      {contactInfo?.lastName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      Email:
                    </Th>
                    <Td outline="none" border="none">
                      {contactInfo?.email}
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      Contact Number:
                    </Th>
                    <Td outline="none" border="none">
                      {contactInfo?.phoneNo}
                    </Td>
                  </Tr>
                  <Tr>
                    <Th outline="none" border="none">
                      Tag:
                    </Th>
                    <Td outline="none" border="none">
                      <Badge
                        colorScheme={
                          BadgeColor[
                            contactInfo?.tag === undefined
                              ? 'Other'
                              : contactInfo?.tag
                          ]
                        }
                      >
                        {contactInfo?.tag}
                      </Badge>
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
                <BsFillPencilFill style={{ marginRight: '0.5rem' }} /> Edit
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}

export default User
