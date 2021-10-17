import React from 'react'
import { Flex, Heading, Link } from '@chakra-ui/react'
import AddContactModal from '../Modal/FormModal'

export const Navbar = (): JSX.Element => {
  return (
    <Flex
      background="white"
      borderBottom=" 1px solid #e8e7e9"
      width={'100%'}
      maxHeight={'60px'}
      minHeight={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
      boxShadow={'0 0.5rem 0 rgb(0 0 0 / 2%)'}
    >
      <Flex
        width={'100%'}
        height={'100%'}
        alignItems={'center'}
        maxWidth={'1100px'}
        padding={'0 1rem'}
        justifyContent={'space-between'}
      >
        <Flex>
          <Link to={'/'}>
            <Heading as="h1" size="lg" color="#262221">
              Contacts
            </Heading>
          </Link>
        </Flex>
        <Flex>
          <AddContactModal />
        </Flex>
      </Flex>
    </Flex>
  )
}
