import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextField from '@mui/material/TextField';
// Header
//     Logo
//     Nav Items Comp
// Body
//     Search
//     Restaurant Container
//     restaurant card
// Footer
//     Copuright
//     Links
//     Address
//     Contact

const RestaurantCard = () => (
    <div className="res-card">
        <img className="food-card-logo" src="https://assets.gqindia.com/photos/5ddcbd00836a7f0008bf48a4/master/pass/biryani-gurugram.jpg"></img>
        <div className='restaurantName'>Mohans Dhaba</div>
        <div className='ratings'>
            <img className='ratingLogo' src="https://tse3.mm.bing.net/th/id/OIP.uTsZmCfnAIEyNG3OP5VB6wAAAA?pid=ImgDet&rs=1"></img>
            <span>4.5</span>
        </div>
        <div className='cuisine'>Biryani, North Indian, Chineese</div>
    </div>
);

const Body = () => (
    <div className='body'>
        <div className='searchBar'>
            <input type='text' className='searchInput'></input>
        </div>
        <div className='restaurantContainer'>
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
            {RestaurantCard()}
        </div>
    </div>
);
const Header = () => (
    <div className='Header'>
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" ></img>
        {/* <TextField id="standard-basic" label="Search Food" variant="standard" class="search" /> */}
        <div className='nav-bar'>
            <ul className='nav-bar-items'>
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Cart
                </li>
            </ul>
        </div>
    </div>   
);
const Layout = () => (
    <div>
       {Header()}
       <Body/>

    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Layout />);