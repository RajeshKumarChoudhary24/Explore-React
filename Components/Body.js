import React from "react";
import ResturantCard from "./ResturantCard"
import restList from "../utils/mockData"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//React Hooks
const Body = () =>{

  // on the fly we are doing array destructuring
  //As we are calling direct API from server no need of mock data 
  //let [listOfResturant, setListOfResturant] = useState(restList);
  let [listOfResturant, setListOfResturant] = useState();
  let [filterlistOfResturant, setFilterListOfResturant] = useState();
  let [searchtext, setSearchtext] = useState('');
  
  // whenever state variables updated react trigger a reconciliation cycle(re-render the component)

  // we can write above code like this also it is just array destructuring
  //let arr = useState(restList);
  //let [listOfResturant, setListOfResturant] = arr; OR
  //const listOfResturant = arr[0];
  //const setListOfResturant = arr[1];
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4520253&lng=78.3742678&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata =await data.json();
    // console.log(jsondata);
    //optional chaining -?
    setListOfResturant(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterListOfResturant(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  // Till the time API is getting loaded we can show this dummy Shimmer UI to user for Better UX
    // if(listOfResturant?.length === undefined || listOfResturant?.length === 0){
    //   return <Shimmer />
    // }

  //Using conditional rendering with ternary operator
    return (listOfResturant?.length === undefined || listOfResturant?.length === 0) ? <Shimmer /> : (
        <div className="body">
          <div className="filter">
              <div className="search">
                <input type="text"
                className="search-box"
                value={searchtext} 
                onChange={(e)=> {
                  setSearchtext(e.target.value);
                }}/>
                <button onClick={()=>{
                  const filterResturant = listOfResturant.filter((rest)=>
                  rest.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                  setFilterListOfResturant(filterResturant);
                  console.log("search text", filterResturant );

                }}>
                  Search
                </button>
                </div>
                <button className="filter-btn"
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
                {filterlistOfResturant?.map((restaurant) => (
                    <ResturantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
};

export default Body;