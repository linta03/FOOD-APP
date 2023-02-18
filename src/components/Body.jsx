import React, { useState, useEffect } from "react";
import { RESTAURANT_API } from "../config";
import NotFound from "./NotFound";
import Resturantcard from "./Resturantcard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
    // setting state for search input and resturant card
  const [searchInput, setsearchInput] = useState("");
  const [resturantCard, setresturantCard] = useState([]);
  
  // setting state for filtered cards
  const [filteredCards, setfilteredCards] = useState([]);
    // setting state for user
  const [user, setuser] = useState("linta")
// getting restaurant data from API
  async function getRestaurants() {
    const api = RESTAURANT_API;
      // fetching the data at the given API
      const response = await fetch(api);
      const data = await response.json();
      // console.log(data?.data?.cards[2]?.data?.data?.cards);
        // setting state for resturant card from fetched data
      setresturantCard(data?.data?.cards[2]?.data?.data?.cards);
       // setting state for filtered cards from fetched data
      setfilteredCards(data?.data?.cards[2]?.data?.data?.cards);
    
   
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!resturantCard) return null; // return null if chain of objects is not specified

  return resturantCard.length === 0 ? (
    <Shimmer />) : (  // returning shimmer component or filtered cards depending on the data present in the resturant card state

    <>
    <div data-testid="search">
      <Search
        searchInput={searchInput}
        setsearchInput={setsearchInput}
        setfilteredCards={setfilteredCards}
        resturantCard={resturantCard}
      />
      </div>
      <div className="flex flex-wrap justify-center bg-purple-50">
        {filteredCards === null ? (
          <NotFound />
        ) : (
          
          filteredCards?.map((data) => {
            return (
              <div key={data?.data?.id}>
                <Resturantcard {...data?.data} category={"View Restaurant"} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
