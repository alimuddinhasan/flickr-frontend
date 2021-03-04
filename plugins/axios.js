import axios from 'axios'

console.log('process.env.NEXT_PUBLIC_WEBSERVICE_BASEURL', process.env)

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEBSERVICE_BASEURL,
})

export default instance
