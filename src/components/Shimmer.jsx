import React, { useMemo } from 'react'

// Display a Shimmer UI while data is being fetched 
const Shimmer = () => {
  const shimmerItems = useMemo(() => Array(24).fill(''), []);

  return (
    <div className='flex flex-wrap justify-center' data-testid="shimmer-Ui">
      {
        shimmerItems.map((item,i)=>(
            <div className='w-40 h-48 bg-gray-300 m-6 rounded-md' key={i}>{item}</div>
        ))
      }
    </div>
  )
}

export default Shimmer
