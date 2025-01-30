import React from 'react'

export default function InputBar() {
  return (
    <div className='flex flex-col items-center ' >
        <form className=' rounded-9xl  '>
            <input type='text' placeholder='Add Activies here' className='px-10 text-black outline-none rounded-lg h-10'/>
        </form>
    </div>
  )
}
