import React from "react";
import ResturantCard from "./ResturantCard"
import restList from "../utils/mockData"
import { useState } from "react";

//React Hooks
const Body = () =>{

  // on the fly we are doing array destructuring
  let [listOfResturant, setListOfResturant] = useState(restList);
  
  // we can write above code like this also it is just array destructuring
  //let arr = useState(restList);
  //let [listOfResturant, setListOfResturant] = arr; OR
  //const listOfResturant = arr[0];
  //const setListOfResturant = arr[1];
  
    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filterlistofresturant = listOfResturant.filter((rest)=>rest.info.avgRating>4);
                    setListOfResturant(filterlistofresturant);
                    console.log("filterlistofresturant",filterlistofresturant);
                }
                } 
                >
                Top Rated Resturant</button>
            </div>
            <div className="resturant-container">
                {listOfResturant.map((restaurant) => (
                    <ResturantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
};

export default Body;