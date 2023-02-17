import React from 'react'
import { filterMenu } from '../helpers/helpers';


const Search = ({ searchInput, setsearchInput,setfilteredCards ,resturantCard}) => {
    return (

        <div className="bg-purple-100 flex justify-center">
            <input
                type="text"
                className="my-5 p-1 rounded-md caret-purple-300 text-purple-500"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {
                    setsearchInput(e.target.value);
                }}
            />
            <button
          
                className="rounded-md my-5 p-1 bg-purple-900 text-white h-10"
                onClick={() => {
                    // Need to filter data
                    const data = filterMenu(searchInput, resturantCard);
                    // Update the statew
                    if(data.length ===0){
                        setfilteredCards(null)
                    }else{

                        setfilteredCards(data);
                    }
                }}
            >Search</button>
        </div>
    )
}

export default Search
