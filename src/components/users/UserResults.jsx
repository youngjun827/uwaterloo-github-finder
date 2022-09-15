import React, { useState, useEffect} from 'react'

import UserItem from './UserItem'
import Pagination from '../layout/Pagination'

function UserResults({users}) {

    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('pushed_at');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const sortArray = (type) => {
          const types = {
            pushed_at: 'pushed_at',
            stargazers_count: 'stargazers_count',
            forks_count: 'forks_count',
          };
          const sortProperty = types[type];
          const sorted = [...users].sort((a, b) => b[sortProperty] - a[sortProperty]);
          setData(sorted);
        };
    
        sortArray(sortType);
      }, [sortType]); 

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <select 
                className="select select-primary w-full max-w-xs mb-5" 
                onChange={(e) => setSortType(e.target.value)
            }>
                <option disabled selected>Sort By: </option>
                <option value="stargazers_count">Highest Stars</option>
                <option value="forks_count">Highest Forks</option>
                <option value="pushed_at">Latest Update</option>

            </select>
            <div className='grid grid-cols-1 gap-[1rem]'>
                {currentPosts.map((user) => (
                    <UserItem key={user.full_name} user={user}/>
                ))}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
      )
  } 


export default UserResults