const axios = require('axios')

const apiClient = axios.create({
  baseURL: `http://localhost:5000/`,
})

export const getContacts = async () => {
    const response = await apiClient.get('/contacts')
    return response.data
  }