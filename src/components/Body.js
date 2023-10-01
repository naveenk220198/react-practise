import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import ShimmerUI from "./ShimmerUI";
const Body = () => {    
    const [ListOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('');
    const FetchData = async() => {
        const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.47025&lng=78.540679&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        debugger
        console.log(json)
        const restaurantsArray = json.data.cards.filter(x=> x?.card?.card?.id === 'restaurant_grid_listing')
        const validatedListOfRestaurants = restaurantsArray[0].card.card.gridElements.infoWithStyle.restaurants
        console.log(validatedListOfRestaurants)
        setListOfRestaurants(validatedListOfRestaurants)
        setFilteredRestaurants(validatedListOfRestaurants)
        console.log(ListOfRestaurants)
    };
    useEffect(()=>{
        FetchData()
    }, [])
    if (ListOfRestaurants.length === 0) {
        return (
        <div>
            <h1>Loading ..</h1>
        {/* <ShimmerUI /> */}
        </div>
        )
    }
    function filterCards() {
        debugger
        const filteredRestaurants = ListOfRestaurants.filter(x => x?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurants(filteredRestaurants)
    };
    function filterTopRated() {
        const filteredList =  ListOfRestaurants.filter( x => x?.info?.avgRating > 4)
        setFilteredRestaurants(filteredList)
    };
    return (<div className='body'>
        <div className='searchBar'>
            <button type="button" className="rated-btn" onClick={filterTopRated}>Top Rated Restaurants</button>
            <button type="button" className="reset-filter" onClick={FetchData}>Reset</button>          
            <input type="text" value={searchText} onChange={(e)=>(setSearchText(e.target.value))} onKeyUp={filterCards}></input>
            <button onClick={filterCards}>Search</button>
        </div>
        <div className="cardsBody">
            <div className='restaurantContainer'>
                {filteredRestaurants.map((restaurant)=> (
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>))}
            </div>
        </div>
    </div>)
};
export default Body;