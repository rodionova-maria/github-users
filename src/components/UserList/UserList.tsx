import React from 'react'
import { Link } from 'react-router-dom'
import { GitHubUser } from '../../types'
import * as S from './UserListStyle'

interface IProps {
  users: GitHubUser[]
}

const UserList = ({ users }: IProps) => {
  return (
    <S.List>
      {users.map((user) => (
        <S.ListItem key={user.id}>
          <Link to={`/${user.login}`}>{user.login}</Link>
        </S.ListItem>
      ))}
    </S.List>
  )
}

export default UserList
