import React from 'react'
import Resturantcard from './Resturantcard'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"

const Slider = ({filteredCards}) => {
  return (
    <>
      <div className='w-full h-[70vh] bg-gray-600 flex justify-center items-center'>
      <button className='bg-gray-900 rounded-full'><AiOutlineArrowLeft color='white' size={30}/></button>

        <div className='flex cursor-grab w-2/3 overflow-x-auto scrollbar-hide scroll-auto select-none'>
      {
          
          filteredCards?.map((data) => {
            return (
              <div key={data?.data?.id}>
                <Resturantcard {...data?.data} category={"View Restaurant"} />
              </div>
            );
          })
        }
        </div>
      <button className='bg-gray-900 rounded-full'><AiOutlineArrowRight color='white' size={30}/></button>

      </div>
    </>
  )
}

export default Slider
