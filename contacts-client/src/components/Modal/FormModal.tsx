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
  FormErrorMessage,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
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

  function submitHandler() {
    console.log('clicked')
  }

  function changeHandler(e) {
    console.log(e.name, e.value)
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
            <Formik
              initialValues={{ name: 'Sasuke' }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">First name</FormLabel>
                        <Input {...field} id="name" placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>

          <ModalFooter>
            u
            <Button colorScheme="blue" mr={3} onClick={submitHandler()}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
