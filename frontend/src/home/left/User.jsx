import React from 'react'

const User = () => {
  return (
    <div>
        <div>
            <div className='flex space-x-4 px-5 py-4  hover:bg-slate-600 duration-300 cursor-pointer'>

                <div className="avatar online">
                    <div className="  w-12 rounded-full">
                        <img src="https://wallpaperaccess.com/full/2562964.jpg" />
                    </div>
                </div>
                <div className=' text-[14px] '>
                    <h1 className='font-bold'>Anji Ganta</h1>
                    <span>anji@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User