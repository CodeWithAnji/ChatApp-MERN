import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

const Right = () => {
  return (
    <div className='w-[70%]  bg-slate-950 text-white'>
      <Chatuser />
     <div className='overflow-y-auto py-2 mt-1 pr-2'  style={{maxHeight:"calc(75vh)"}}>
     <Messages />
     </div>
      <Type />
    </div>
  )
}

export default Right