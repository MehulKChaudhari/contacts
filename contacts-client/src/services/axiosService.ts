import axios from 'axios'
import { ContactTypes } from '../components/ContactList/ContactList.types'
import { InitialFormValues } from '../components/Modal/formModal.types'

const apiClient = axios.create({
  baseURL: `https://contacts-production-f5d9.up.railway.app/`,
})

export const getContacts = async () => {
  const response = await apiClient.get<ContactTypes[]>('/contacts')
  return response.data
}

export const getContactDetails = async (userid: any) => {
  const response = await apiClient.get<ContactTypes>(
    `/get-contact-details/${userid}`
  )
  return response.data
}
export const deleteContactUsingId = async (userid: any) => {
  const response = await apiClient.post<any>('/delete-contact', {
    userId: userid,
  })
  return response.data
}

export const addContact = async (formInputs: InitialFormValues) => {
  console.log('services form', formInputs)
  const response = await apiClient.post<any>('/add-contact', {
    firstName: formInputs.firstName,
    lastName: formInputs.lastName,
    email: formInputs.email,
    phoneNo: formInputs.phoneNo
  })
  return response.data
}
