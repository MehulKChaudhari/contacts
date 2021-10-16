import { Badge, Flex, Heading, HStack, Link } from '@chakra-ui/react'
import React from 'react'
import { ICardPropsType } from './Card.types'
import { FaRegUserCircle, FaArrowCircleRight } from 'react-icons/fa'

export const BadgeColor = {
  Home: 'green',
  Work: 'other',
  Other: 'red',
}
export const Card = ({ name, tag }: ICardPropsType): JSX.Element => {
  return (
    <Link
      borderRadius={'8px'}
      overflow={'hidden'}
      marginTop={'2rem'}
      width={['90%', '50%']}
      alignSelf="center"
      background="white"
      border={'1.5px solid #096ce6'}
      padding={['0.8rem', '1.5rem']}
      alignItems={'center'}
      _hover={{ shadow: 'md' }}
      href="/user"
    >
      <HStack justifyContent={'space-around'}>
        <Flex>
          <FaRegUserCircle color="black" size="1.5rem" />
          <Heading as="h3" size="md" ml={2}>
            {name}
          </Heading>
        </Flex>
        <Flex>
          <Heading as="h4" size="md">
            <Badge colorScheme={BadgeColor[tag]}>{tag}</Badge>
          </Heading>
        </Flex>
        <Flex>
          <FaArrowCircleRight color="#096ce6" size="1.5rem" />
        </Flex>
      </HStack>
    </Link>
  )
}
