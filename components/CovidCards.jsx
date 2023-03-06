import React from 'react'

function CovidCards(props) {
  return (
    <div className={`flex flex-col border shadow-md rounded-md w-[10rem] h-[5rem] justify-center gap-1 px-2 ${props.color} bg-gray-100`}>
        <p className='font-Poppins text-lg font-regular '>{props.title}</p>
        <p className='font-Poppins text-lg font-bold text-zinc-700'>{props.body}</p>
    </div>
  )
}

export default CovidCards