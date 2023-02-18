import React from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';
import useRestaurantMenu from '../hooks/useRestaturantMenu';
import Resturantcard from './Resturantcard';
import Shimmer from './Shimmer';


//Restaurant details in other page
const RestaurantDetails = () => {

// Get the params from the URL with the useParams hook
    const params = useParams();
    // Destructure the id from the params
    const { id } = params;

// Use a custom hook to get the restaurant data
    const restaurant = useRestaurantMenu(id);
 


    return (!restaurant) ? <Shimmer /> : (
        <>
            <div className="">
                <div className='flex p-12 border-2 m-2 shadow-xl rounded-md'>
                    <img className='h-80' src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
                    <div className='m-10 pl-20'>
                    <h1 className='font-extrabold text-lg'>{restaurant?.name}🟣</h1>
                    <h2 className='p-1 font-bold font-mono'> <span className='font-extrabold text-lg text-purple-800 font-mono'> Area :</span> {restaurant?.area}</h2>
                    <h2 className='p-1 font-bold font-mono'> <span className='font-extrabold text-lg text-purple-800 font-mono'>City :</span> {restaurant?.city}</h2>
                    <h2 className='p-1 font-bold font-mono'> <span className='font-extrabold text-lg text-purple-800 font-mono'>Price :</span>  {restaurant?.costForTwoMsg}</h2>
                    <h2 className='p-1 font-bold font-mono'> <span className='font-extrabold text-lg text-purple-800 font-mono'>Rating :</span>  {restaurant?.avgRating}⭐</h2>
                    <button className='mt-12 bg-purple-300 h-10 w-28 text-black font-bold rounded-md font-mono p-2 mr-3'>Like It❤️</button>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-wrap justify-center'>
                        {
                            Object.values(restaurant?.menu?.items).map((items,i) => (
                               
                                <>
                                
                                <Resturantcard {...items}  key={`item-${i}`} category={"View item"} adding={true} card={items} />
                                </>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantDetails
