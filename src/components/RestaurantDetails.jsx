import React from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';
import useRestaurantMenu from '../hooks/useRestaturantMenu';
import Shimmer from './Shimmer';
const RestaurantDetails = () => {


    const params = useParams();
    const { id } = params;

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
                    <button className='mt-12 bg-purple-300 h-10 w-28 text-black font-bold rounded-md font-mono p-2'>Like It❤️</button>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-wrap justify-center'>
                        {
                            Object.values(restaurant?.menu?.items).map((items) => (
                                <li key={items?.id} className="bg-purple-300 w-auto m-3 p-3 rounded-md font-thin">{items?.name}</li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantDetails
