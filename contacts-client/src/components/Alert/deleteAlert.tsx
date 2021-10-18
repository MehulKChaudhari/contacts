import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'

import React, { useState, useRef, LegacyRef } from 'react'
import { useNavigate } from 'react-router-dom';

export function DeleteContact({
  onClick,
}: {
  onClick: () => void
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onClose = () => setIsOpen(false)
  const cancelRef: LegacyRef<HTMLButtonElement> | null = useRef(null)
  const navigate = useNavigate();

  const SubmitHandler = () => {
    onClose()
    onClick()
    navigate('/');
  }

  return (
    <>
      <Button
        colorScheme="red"
        variant="outline"
        mt={['1rem', '0']}
        ml={['0', '1rem']}
        width={['100%', 'auto']}
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={'whitesmoke'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm submission
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure, you want to delete this contact?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                colorScheme="teal"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                onClick={SubmitHandler}
                ml={3}
                colorScheme="red"
                variant="outline"
                _hover={{ shadow: 'md' }}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
