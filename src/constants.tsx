import axios from 'axios'

const GITHUB_API_BASE_URL = 'https://api.github.com'
const GITHUB_ACCESS_TOKEN =
  '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'

export const PER_PAGE = 20

export const axiosInstance = axios.create({
  baseURL: `${GITHUB_API_BASE_URL}`,
  headers: {
    Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
    Accept: 'application/vnd.github.v3+json'
  }
})
