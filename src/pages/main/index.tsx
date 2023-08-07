import React, { useState } from 'react'
import { PER_PAGE, axiosInstance } from '../../constants'
import { GitHubUser, SearchUsersResponse } from '../../types'
import UserList from '../../components/UserList/UserList'
import SearchForm from '../../components/SearchForm/SearchForm'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import Sort from '../../components/Sort/Sort'

const MainPage = () => {
  const [searchString, setSearchString] = useState('')
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [totalUsers, setTotalUsers] = useState(0)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const searchUsers = async (page: number) => {
    try {
      setLoading(true)
      const response = await axiosInstance.get<SearchUsersResponse>(
        '/search/users',
        {
          params: {
            q: searchString,
            sort: 'repositories',
            order: sortOrder,
            per_page: PER_PAGE,
            page: page
          }
        }
      )
      setUsers(response.data.items)
      setTotalUsers(response.data.total_count)
    } catch (error) {
      console.error('Error while searching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPageNumber(1)
    searchUsers(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPageNumber(page)
    searchUsers(page)
  }

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'))
    searchUsers(currentPageNumber)
  }

  return (
    <>
      <SearchForm
        searchString={searchString}
        onSearch={handleSearch}
        setSearchString={setSearchString}
      />
      {loading ? (
        <Loader />
      ) : users.length > 0 ? (
        <div>
          <Sort onSort={handleSort} sortOrder={sortOrder} />
          <UserList users={users} />
          <Pagination
            currentPageNumber={currentPageNumber}
            totalPages={Math.ceil(totalUsers / PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div>Пользователей не найдено.</div>
      )}
    </>
  )
}

export default MainPage
