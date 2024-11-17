import React from 'react'
import { IoSend } from "react-icons/io5";

function Type() {
    return (
        <>
            <div className='flex ml-3 space-x-3 h-[8vh] text-center bg-gray-800 mt-10'>
                <div className='w-[70%]'>
                    <input type="text" placeholder="Type here" className=" border-[1px] border-gray-700 bg-slate-950  flex items-center w-full py-3 px-3 rounded-xl grow outline-none mt-1 h-10 ml-2 " />
                </div>

                <button className='text-2xl'>
                    <IoSend className='mr-2' />
                </button>
            </div>
        </>
    )
}

export default Type