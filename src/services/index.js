import axios from 'axios'
import { HEADER, SESSION } from '../utils/constants'
import { handleSessionExpiration,getLocalStorage } from '../utils/helper'
const instance = axios.create({
  timeout: 120000,
  headers: { 
    'X-Custom-Header': 'foobar',
    [`${HEADER.TOKEN}`]: `Bearer ${getLocalStorage(SESSION.TOKEN)}`,
 }
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { data, status } = response
    handleSessionExpiration(data && data.message)
    return { data, status }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instance
