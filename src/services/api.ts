import axios from 'axios'
import { env } from '../env'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${env.token}`,
    accept: 'application/vnd.github+json',
  },
})

export { api }
