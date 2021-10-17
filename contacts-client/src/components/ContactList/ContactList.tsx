import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getContacts } from '../../services/axiosService'
import { Card } from '../Card/Card'
import { ContactTypes } from './ContactList.types'

export const ContactList = (): JSX.Element => {
  const [contacts, setContacts] = useState<ContactTypes[]>([])

  async function getAllContacts() {
    const response = await getContacts()
    setContacts(response)
    console.log('respone', response)
  }
  useEffect(() => {
    getAllContacts()
  }, [])
  return (
    <>
      {contacts.forEach((contact) => {
        ;<Flex alignItems="center" justifyContent="center">
          <Card
            firstName={contact.firstName}
            lastName={contact.lastName}
            tag={contact.tag}
            id={contact._id}
          />
        </Flex>
      })}
    </>
  )
}
