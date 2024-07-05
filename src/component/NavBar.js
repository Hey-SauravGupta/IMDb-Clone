import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    
    <div className='flex border space-x-8 item-center pl-3 py-4 bg-gray-900'> 
     <img src='../imdb.png' className='w-[60px]'/>

<Link to={'/'} className='text-blue-500 font-bold text-xl'>Movie</Link>
<Link to={'/WatchList'} className='text-blue-500 font-bold text-xl'>WatchList</Link>

    </div>
    
  )
}

export default NavBar