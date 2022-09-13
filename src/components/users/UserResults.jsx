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

    // const [data, setData] = useState([]);
    // const [sortType, setSortType] = useState('pushed_at');

  useEffect(() => {
    const getUserData = async() => {
        dispatch({type: 'SET_LOADING'});
        const userData = await getUsers()
        dispatch({type: 'GET_USERS', payload: userData})
    }
    getUserData()

    // sortArray(sortType);
    // Add sortType for dependencies
  }, [dispatch])

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // const sortArray = (type) => {
  //   const types = {
  //     pushed_at: 'pushed_at',
  //     stargazers_count: 'stargazers_count',
  //     forks_count: 'forks_count',
  //   };
  //   const sortProperty = types[type];
  //   const sorted = [...users].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //   setData(sorted);
  // };

  if (!loading) {
    return (
        <div>
            {/* <select 
              className="select select-primary w-full max-w-xs mb-4"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option disabled selected>Sort By</option>
              <option value="stargazers_count">Highest Star Count</option>
              <option value="forks_count">Highest Forks Count</option>
              <option value="pushed_at">Latest Project</option>
            </select> */}
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