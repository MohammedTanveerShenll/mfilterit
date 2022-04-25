// import axios from 'axios'
// import { getLocalStorage } from '../utils/helper'
// import { HEADER, SESSION } from '../utils/constants'

// const instance = axios.create({
//     headers: {
//         [`${HEADER.TOKEN}`]: `${HEADER.BEARER} ${getLocalStorage(SESSION.TOKEN)}`,
//         'Content-Type': HEADER.CONTENT_TYPE
//     },
//     timeout: HEADER.TIMEOUT
// })

// instance.interceptors.request.use(
//     function (config) {
//         return config
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

// instance.interceptors.response.use(
//     function (response) {
//         const { data, status } = response
//         return { data, status }
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

// export default instance
