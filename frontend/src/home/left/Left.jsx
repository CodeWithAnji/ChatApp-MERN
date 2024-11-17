import React from 'react'
import Search from './Search'
import Users from './Users';


const Left = () => {
  return (
    <div className='w-[30%]  bg-black text-white'>
      <h1 className='font-bold text-3xl px-4 py-2'>Chat</h1>

      <Search/>
     <hr />
    <Users/>
    </div>
    
  );
}

export default Left