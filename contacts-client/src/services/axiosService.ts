import axios from 'axios'
import { ContactTypes } from '../components/ContactList/ContactList.types'

const apiClient = axios.create({
  baseURL: `http://localhost:5000/`,
})

export const getContacts = async () => {
    const response = await apiClient.get<ContactTypes[]>('/contacts')
    return response.data
  }