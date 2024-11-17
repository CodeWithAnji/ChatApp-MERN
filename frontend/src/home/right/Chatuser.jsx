import React from 'react'

function Chatuser() {
    return (
        <>
            <div className='pl-5 pt-5   h-[8vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
            <div>
                <div className="avatar online">
                    <div className="  w-12 rounded-full">
                        <img src="https://wallpaperaccess.com/full/2562964.jpg" />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-xl'>Anji Ganta</h1>
                <span className='text-sm'>Online</span>
            </div>
            </div>
        </>
    )
}

export default Chatuser