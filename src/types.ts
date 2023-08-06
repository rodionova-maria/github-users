export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface SearchUsersResponse {
  total_count: number
  items: GitHubUser[]
}
