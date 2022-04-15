import Axios, { AxiosRequestConfig } from 'axios'

const param: AxiosRequestConfig = {
  timeout: 15000,
  baseURL: '/api'
}
const axios = Axios.create(param)

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios