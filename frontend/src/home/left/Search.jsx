import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
       <div className='h-[13vh]'>
         <div className='px-6 py-4 '>
            <form action="">
                <div className='flex space-x-3'>
                    <label className="border-[1px] border-gray-700 bg-slate-950 rounded-lg flex items-center gap-2 w-[80%] p-3">
                        <input type="text" className=" grow outline-none bg-transparent md:text-sm  " placeholder="Search" />
                    </label>
                <button>
                    <IoSearch className='text-4xl p-2 hover:bg-gray-600 rounded-full duration-300' />
                </button>
                </div>
            </form>
        </div>
       </div>
    )
}

export default Search