import React from 'react'

import LoadingScreen from '../assets/loading.gif'

function Loader() {
  return (
    <div  className='w-100 mt-20'>
        <img src={LoadingScreen} alt="Loading Screen" className='text-center mx-auto' width={180}/>
    </div>
  )
}

export default Loader