import {LOGO_URL} from "../utils/constant";
import { useState } from "react";

const Header = () =>{
    const [btnName , setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="food-logo">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Conatct Us</li>
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