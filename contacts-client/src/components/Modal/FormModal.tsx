import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { InitialFormValues } from './formModal.types'

const initialFormValues: InitialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNo: '',
  tag: '',
}
export default function InitialFocus(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formValues, setFormValues] =
    useState<InitialFormValues>(initialFormValues)

  function submitHandler(): void {
    console.log('clicked')
  }

  function changeHandler(e: { firstName: any; value: any }) {
    console.log(e.firstName, e.value)
  }

  return (
    <>
      <Button color="#096ce6" size="md" onClick={onOpen}>
        Add contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new contact.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                // onChange={changeHandler}
                name="firstName"
                value={formValues.firstName}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                // onChange={changeHandler}
                name="lastName"
                value={formValues.lastName}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                // onChange={changeHandler}
                name="email"
                value={formValues.email}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="Phone Number"
                // onChange={changeHandler}
                name="phoneNo"
                value={formValues.phoneNo}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tag</FormLabel>
              <RadioGroup
                // onChange={changeHandler}
                name="fav_language"
                value="JavaScript"
              >
                <Stack direction="row">
                  <Radio value="1">Home</Radio>
                  <Radio value="2">Work</Radio>
                  <Radio value="3">Other</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={submitHandler}
              type="submit"
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
