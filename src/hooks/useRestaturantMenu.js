import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../config";

// useRestaurantMenu hook to get restaurant data using the id passed as an argument 
 const useRestaurantMenu =(id)=>{

    const [restaurant, setrestaurant] = useState(null)
    async function getRestaurants() {
        const api =
            RESTAURANT_MENU+id;
        try {
            const response = await fetch(api);
            const data = await response.json();
            console.log(data?.data);
            setrestaurant(data?.data);

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    return restaurant
}
export default useRestaurantMenu;