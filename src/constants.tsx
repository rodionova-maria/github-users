import axios from 'axios'

const GITHUB_API_BASE_URL = 'https://api.github.com'

export const PER_PAGE = 40

export const axiosInstance = axios.create({
  baseURL: `${GITHUB_API_BASE_URL}`,
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})
