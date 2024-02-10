import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const [btnName , setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="food-logo">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Conatct Us</Link> </li>
                <li>Cart</li>
                <button className="login" onClick={() =>{
                    btnName === "Login" ? 
                    setBtnName("Logout") :
                    setBtnName("Login")
                }}>
                    {btnName}
                </button>
            </ul>
            </div>
        </div>
    )
    };
export default Header;