import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../constants'
import Loader from '../../components/Loader/Loader'
import User from '../../components/User/User'
import { GitHubUser } from '../../types'

const DetailsPage = () => {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const { userLogin } = useParams<{ userLogin: string }>()

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.get<GitHubUser>(
          `/users/${userLogin}`,
          {
            params: {
              q: userLogin
            }
          }
        )
        setUser(response.data)
      } catch (error) {
        console.error('Error while fetching user details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserDetails()
  }, [userLogin])

  if (loading) {
    return <Loader />
  }

  if (!user) {
    return <div>Пользователь не найден.</div>
  }

  return <User user={user} />
}

export default DetailsPage
