import React from 'react'
import { ERROR_PAGE_IMG_BG_URL } from '../config'

const NotFound = () => {
  return (
    <div className='flex justify-center flex-col'>
        <h1 className='flex justify-center font-extrabold text-3xl pt-16 text-purple-800'>NOT FOUND TRY SOMETHING ELSE</h1>
        <div className='flex justify-between'>
      <img src={ERROR_PAGE_IMG_BG_URL} alt="" className='w-auto h-96 flex justify-center' />
      </div>
    </div>
  )
}

export default NotFound
