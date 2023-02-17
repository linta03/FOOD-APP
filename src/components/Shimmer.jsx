import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center' data-testid="shimmer-Ui">
      {
        Array(24).fill("").map((item,i)=>(
            <div className='w-40 h-48 bg-gray-300 m-6 rounded-md' key={i}>{item}</div>
        ))
      }
    </div>
  )
}

export default Shimmer
