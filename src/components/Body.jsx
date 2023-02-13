import React, { useState, useEffect } from "react";
import { RESTAURANT_API } from "../config";
import NotFound from "./NotFound";
import Resturantcard from "./Resturantcard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import userrContext from "../contexts/userContext"

const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [resturantCard, setresturantCard] = useState([]);
  const [filteredCards, setfilteredCards] = useState([]);
  const [user, setuser] = useState("linta")

  async function getRestaurants() {
    const api = RESTAURANT_API;
    try {
      const response = await fetch(api);
      const data = await response.json();
      // console.log(data?.data?.cards[2]?.data?.data?.cards);
      setresturantCard(data?.data?.cards[2]?.data?.data?.cards);
      setfilteredCards(data?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!resturantCard) return null;

  return resturantCard.length === 0 ? (
    <Shimmer />) : (
    <>
      <Search
        searchInput={searchInput}
        setsearchInput={setsearchInput}
        setfilteredCards={setfilteredCards}
        resturantCard={resturantCard}
      />
       <userrContext.Consumer value={{user}}>
         {({user})=><h5>{user.user}</h5> }
       </userrContext.Consumer>
      
      <div className="flex flex-wrap justify-center bg-purple-50">
        {filteredCards === null ? (
          <NotFound />
        ) : (
          
          filteredCards?.map((data) => {
            return (
              <div key={data?.data?.id}>
                <Resturantcard {...data?.data} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
