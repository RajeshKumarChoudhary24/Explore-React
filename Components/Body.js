import ResturantCard from "./ResturantCard"
import restList from "../utils/mockData"

//Under map Not using key is (Not acceptable bec React will re-render all element and it will cause performance issue)
//Key as a Index (Not a good practice not recomanded)
//Unique id as key(best practice)


const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input placeholder="Seach food"></input>
                <button>Search</button>
            </div>
            <div className="resturant-container">
                {restList.map((restaurant) => (
                    <ResturantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
};

export default Body;