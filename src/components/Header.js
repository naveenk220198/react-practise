import { RATING_LOGO, APP_LOGO } from "../utils/constants";
import { useState } from "react";
import Body from "./Body";


const Header = () => { 
    const [loginLogoutBtn, setLoginbtn] = useState('Login');
    return (
    <div className='Header'>
        <img className="logo" src= {APP_LOGO} ></img>
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
                <li>
                    <button className="login-btn" onClick={() => {loginLogoutBtn === 'Login' ? setLoginbtn('Logout') : setLoginbtn('Login')}}>{loginLogoutBtn}</button>
                </li>
            </ul>
        </div>
    </div>   
    )
};
export default Header;