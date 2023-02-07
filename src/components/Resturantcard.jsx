import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'

const Resturantcard = ({name,cloudinaryImageId,costForTwoString,avgRating,id}) => {
   
  return (
   <>
   <div className="w-56 h-auto border-2 border-gray-200 m-8 shadow-md rounded-md" >
    <div className="rounded-md"><img className='rounded-t-md' src={IMG_CDN_URL+cloudinaryImageId} alt="" /></div>
    <div className='p-3 flex flex-col justify-center'>
      <Link to={"/restaurant/"+ id}>
    <div className="font-bold"><h3>{name}</h3></div>
    </Link>
    <div className="font-semibold"><h5>{costForTwoString}</h5> </div>
    <div className="calories">{avgRating}⭐</div>
    <Link to={"/restaurant/"+ id}>
    <button className='bg-purple-900 w-32 h-10 text-white mt-2 rounded-md font-semibold'>View Resaurant</button>
    </Link>
    </div>
   </div>
   </>
  )
}

export default Resturantcard