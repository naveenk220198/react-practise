import { RATING_LOGO, DB_CARDS_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const resData = props.resData
    const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info 
    return (<div className="res-card">
        <img className="food-card-logo" src={ 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId } alt="res-logo"></img>
        <div className='restaurantName'>{name}</div>
        <div className='ratings'>
            <img className='ratingLogo' src={RATING_LOGO}></img>
            <span>{avgRating}</span>
        </div>
        <div className='cuisine'>{ cuisines.join(', ')}</div>
    </div>
    );
}
export default RestaurantCard;