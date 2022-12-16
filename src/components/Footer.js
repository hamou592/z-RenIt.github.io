import "./FooterStyles.css";
import logo from "../assets/logo.png"
import { SocialMedia } from "./DataAgent";
import { FooterNav } from "./DataFooter";
import {Routes,Route,Link} from "react-router-dom";
import { Composed } from "./DataFooter";
function Footer(){
    return(
        <div className="FootertAll">
            <div className="first">
                <div className="logo">
                    <img src={logo}/>
                    <h2>Rent<span>It</span></h2>
                </div>
                {Composed.map((item,index) =>{
                        return(
                            <div className="flexFooter">
                                <img src={Composed[index].img} />
                                <h5>{Composed[index].h5}</h5>
                            </div>
                        )
                })}
            </div>
            <div className="second">
                <ul className="FooterNav">
                    {FooterNav.map((item,index) =>{
                        return(
                            <li>
                                <Link to={FooterNav[index].path}>
                                    {FooterNav[index].title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className="social_media">
                    {SocialMedia.map((item,index) => {
                        return(
                            <Link>
                                <i class={SocialMedia[index].i}></i>
                            </Link>
                        )
                    })
                    }                                  
                </ul>
                <h6>Copyright @2022 All rights reserved.</h6>
            </div>
        </div>

    )
}
export default Footer;