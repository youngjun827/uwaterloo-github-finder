import React, {useContext, useEffect, useState} from 'react'

import GithubContext from '../../context/github/GithubContext'
import { getUsers } from '../../context/github/GithubActions'

import UserItem from './UserItem'
import Loader from '../layout/Loader'
import Pagination from '../layout/Pagination'

function UserResults() {
    const {users, loading, dispatch} = useContext(GithubContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

  useEffect(() => {
    const getUserData = async() => {
        dispatch({type: 'SET_LOADING'});
        const userData = await getUsers()
        dispatch({type: 'GET_USERS', payload: userData})
    }

    getUserData()
  }, [])

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!loading) {
    return (
        <div>
            <div className='grid grid-cols-1 gap-[1rem]'>
                {currentPosts.map((user) => (
                    <UserItem key={user.full_name} user={user}/>
                ))}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={users.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
      )
  } else {
    return <div>
        <Loader/>
    </div>
  }
}


export default UserResults