import React, {useContext, useEffect} from 'react'

import GithubContext from '../../context/github/GithubContext'
import { getUsers } from '../../context/github/GithubActions'

import UserResults from './UserResults'
import Loader from '../layout/Loader'

function UserFetch() {
    const {users, loading, dispatch} = useContext(GithubContext)

  useEffect(() => {
    const getUserData = async() => {
        dispatch({type: 'SET_LOADING'});
        const userData = await getUsers()
        dispatch({type: 'GET_USERS', payload: userData})
    }
    getUserData()

  }, [dispatch])

  if (!loading) {
    return (
        <div>
            <UserResults users={users}/>
        </div>
      )
  } else {
    return <div>
        <Loader/>
    </div>
  }
}


export default UserFetch