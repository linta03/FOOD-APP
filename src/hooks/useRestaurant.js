// import { useEffect, useState } from "react";
// import { RESTAURANT_API } from "../config";

// const useRestaurant =()=>{
//     const [resturantCard, setresturantCard] = useState([]);

//     async function getRestaurants() {
//         const api =
//           RESTAURANT_API;
//         try {
//           const response = await fetch(api);
//           const data = await response.json();
//           console.log(data?.data?.cards[2]?.data?.data?.cards);
//           setresturantCard(data?.data?.cards[2]?.data?.data?.cards);
//         } catch (err) {
//           console.error(err);
//         }
//       }
    
//       useEffect(() => {
//         getRestaurants();
//       }, []);

//       console.log(resturantCard+"gfdcgfd")

//       return resturantCard;



// }

// export default  useRestaurant;