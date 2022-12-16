import "./AgentStyles.css";
import { SocialMedia } from "./DataAgent";
import {DataAgent} from "./DataAgent";
import {Routes,Route,Link} from "react-router-dom";
function Agent(props){
    return(
        <div className="Agentall">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <div className="AgentFeatures">
            {DataAgent.map((item,index) => {
                        return(
                            <div className="AgentFeature">
                                <div className="buttonheader">
                                    <button>{DataAgent[index].orangeh3}</button>
                                </div>  
                                <div className="profiledetaille">
                                   <img className="profile" src={DataAgent[index].img} ></img>
                                   <i class="fa-solid fa-circle-check"></i> 
                                </div>                           
                                
                                <div className="locate" >
                                    <i class="fa fa-location-dot"></i>
                                    <p>Liverpool,Canada</p>
                                </div>
                                <h3>{DataAgent[index].name}</h3>
                                <ul>
                                    {SocialMedia.map((item,index) => {
                                        return(
                                            <Link>
                                                <i class={SocialMedia[index].i}></i>
                                            </Link>
                                        )
                                    })
                                    }                                  
                                </ul>
                                <div className="buttons">
                                    <button className="green">{DataAgent[index].mesg}</button>
                                    <button className="black"><i class="fa fa-phone-alt"></i></button>
                                </div>
                                
                            </div>
                        )
            })}
            </div>
        </div>
    )
}
export default Agent; 