import React, { useState, useEffect } from "react";
import { RESTAURANT_API } from "../config";
import NotFound from "./NotFound";
import Resturantcard from "./Resturantcard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [resturantCard, setresturantCard] = useState([]);
  const [filteredCards, setfilteredCards] = useState([]);

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
    <Shimmer />
  ) : (
    <>
      <Search
        searchInput={searchInput}
        setsearchInput={setsearchInput}
        setfilteredCards={setfilteredCards}
        resturantCard={resturantCard}
      />
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
