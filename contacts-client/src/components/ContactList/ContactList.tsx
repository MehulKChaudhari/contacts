import { Box, Center, Flex, Heading, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getContacts } from '../../services/axiosService'
import { Card } from '../Card/Card'
import AddContactModal from '../Modal/FormModal'
import { ContactTypes } from './ContactList.types'

export const ContactList = (): JSX.Element => {
  const [contacts, setContacts] = useState<ContactTypes[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function getAllContacts() {
    const response = await getContacts()
    setContacts(response)
    setIsLoading(false)
  }
  useEffect(() => {
    getAllContacts()
  }, [])
  return isLoading ? (
    <Center minH="80vh">
      <Spinner />
    </Center>
  ) : contacts.length > 0 ? (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      {contacts.map((contact) => {
        return (
          <Flex>
            <Card
              firstName={contact.firstName}
              lastName={contact.lastName}
              tag={contact.tag}
              id={contact._id}
            />
          </Flex>
        )
      })}
    </Flex>
  ) : (
    <Flex alignItems="center" justifyContent="center">
      <Box
        background="whitesmoke"
        rounded="md"
        m="10"
        p="10"
        alignItems="center"
      >
        <Heading as="h3" size="lg" color="gray">
          The contact list is empty, Add some contacts.
        </Heading>
        <AddContactModal />
      </Box>
    </Flex>
  )
}
