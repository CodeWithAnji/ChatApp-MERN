import React from 'react'
import { TbLogout2 } from "react-icons/tb";


const Logout = () => {
  return (
    <div className='w-[5%]  bg-slate-950 text-white text-sm flex flex-col justify-end'>

    <div >
            <form action="">
                <div className='flex space-x-3'>
                   
                <button className='p-1'>
                    <TbLogout2 className='text-4xl p-2 mr-2 hover:bg-gray-600 rounded-lg duration-300' />
                </button>
                </div>
            </form>
        </div>
    
    </div>

  )
}

export default Logout