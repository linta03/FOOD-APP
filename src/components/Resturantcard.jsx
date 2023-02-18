import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';
// import { IMG_CDN_URL } from '../config'
import {addItem} from "../store/slices/cartSlice"

const Resturantcard = ({name,cloudinaryImageId,costForTwoString,avgRating,id,category,adding,price,card}) => {
  
  const dispatch = useDispatch();
  
  const handleAddFood=()=>{
     dispatch(addItem(card))
  }
    
  return (
   <>
   <div className="w-56 h-auto border-2 border-gray-200 m-8 shadow-md rounded-md" >
   {
       !cloudinaryImageId ? <img src="https://www.evemilano.com/wp-content/uploads/2011/04/not-found1-410x256.png" alt="" />: <div className="rounded-md"><img className='rounded-t-md' src={IMG_CDN_URL+cloudinaryImageId} alt="" /></div>
     }
    
    <div className='p-3 flex flex-col justify-center'>
      <Link to={"/restaurant/"+ id}>
    <div className="font-bold"><h3>{name}</h3></div>
    </Link>
    <div className="font-semibold"><h5>{costForTwoString}</h5> </div>
    <div className="calories">{avgRating}⭐</div>
    <Link to={"/restaurant/"+ id}>
   <p>{id}</p>
    {
      adding ?
      <>
       <div className="font-extrabold"><h5>💵 {price} Rs</h5></div>
       <button className='bg-purple-900 w-32 h-10 text-white mt-2 rounded-md font-semibold' onClick={()=>handleAddFood()}>Add</button></>: <button className='bg-purple-900 w-32 h-10 text-white mt-2 rounded-md font-semibold'> {category}</button>
    }
  
    </Link>
    </div>
   </div>
   </>
  )
}

export default Resturantcard