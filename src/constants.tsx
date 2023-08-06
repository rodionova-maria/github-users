import axios from 'axios'

const GITHUB_API_BASE_URL = 'https://api.github.com'
const GITHUB_ACCESS_TOKEN = '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'

export const PER_PAGE = 20

export const axiosInstance = axios.create({
  baseURL: `${GITHUB_API_BASE_URL}`,
  headers: {
    Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
    Accept: 'application/vnd.github.v3+json'
  }
})
