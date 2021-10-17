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
import { addContact } from '../../services/axiosService'

export default function AddContactModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [radioValue, setRadioValue] = useState('Other')
  const [formInputs, setFormInputs] = useState<InitialFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  })
  const handleInputs = (e: any) => {
    setFormInputs((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      }
    })
  }
  console.log('radio', radioValue)
  console.log('form', formInputs)

  const handleSubmit = () => {
    const response = addContact(formInputs)
    onClose()
    return response
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
                name="firstName"
                value={formInputs.firstName}
                onChange={handleInputs}
                type="text"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                name="lastName"
                value={formInputs.lastName}
                onChange={handleInputs}
                type="text"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                name="email"
                value={formInputs.email}
                onChange={handleInputs}
                type="email"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="Phone Number"
                name="phoneNo"
                value={formInputs.phoneNo}
                onChange={handleInputs}
                type="number"
              />
            </FormControl>
            {/* <FormControl mt={4}>
              <FormLabel>Tag</FormLabel>
              <RadioGroup
                onChange={setFormInputs}
                name="tag"
                value={formInputs.tag}
                defaultValue="Other"
              >
                <Stack direction="row">
                  <Radio name="home" value="Home">
                    Home
                  </Radio>
                  <Radio name="work" value="Work">
                    Work
                  </Radio>
                  <Radio name="other" value="Other">
                    Other
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button color="#096ce6" mr={3} type="submit" onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
