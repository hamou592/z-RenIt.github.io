import "./NavbarStyles.css"
import logo from "../assets/logo.png"
import { MenuItems } from "./MenuItems";
import {Routes,Route,Link} from "react-router-dom";
import React, { useState } from "react";



function Navbar(){
    const [navList,setNavList] = useState(false)
    return(
        <div className="Navbar">
            <div className="logo">
                <img src={logo}/>
                <h2>Rent<span>It</span></h2>
            </div>
            <div className="menu-icons">                    
                    <span onClick={() => setNavList(!navList)} className="material-symbols-outlined" >{navList ? "close" : "menu" }</span>
            </div>
            <ul className={navList ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item,index) =>{
                    return(
                        <li>
                            <Link to={MenuItems[index].path} className={MenuItems[index].cName}>
                                {MenuItems[index].title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="button">
                <h3><span>2</span>My List</h3>
                <Link>
                    <span class="material-symbols-outlined">logout</span>
                    <butto>Sign In</butto>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;