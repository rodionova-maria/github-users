import React from 'react'
import * as S from './UserStyle'
import { GitHubUser } from '../../types'

interface IProps {
  user: GitHubUser
}

const User = ({ user }: IProps) => {
  return (
    <S.Profile>
      <S.Avatar src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <p>
        <a href={user.html_url} target="_blank" rel="noreferrer noopener">
          Ссылка на GitHub
        </a>
      </p>
    </S.Profile>
  )
}

export default User
