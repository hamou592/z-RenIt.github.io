import "./RecentFeaturesStyles.css"
import heart from "../assets/heart.png"
import { DataRecentFeatures } from "./DataRecentFeatures";
function RecentFeatures(props){
    return(
        <div className="RecentAll">
            <h1>{props.h1}</h1>
            <p className="header">{props.p}</p>
            <div className="RecentFeatures">
            {DataRecentFeatures.map((item,index) => {
                        return(
                            <div className="RecentFeature">
                                <img src={DataRecentFeatures[index].img} />
                                <div className="Recenthead">
                                    <h6>{DataRecentFeatures[index].h6}</h6>
                                    <img src={heart} />
                                </div>
                                <h3>{DataRecentFeatures[index].h3}</h3>
                                <h4><span class="material-symbols-outlined">location_on</span>{DataRecentFeatures[index].h4}</h4>
                                <div className="last">
                                    <button>{DataRecentFeatures[index].button}</button>
                                    <h5>{DataRecentFeatures[index].h5}</h5>
                                </div>
                            </div>
                        )
            })}
            </div>
        </div>

    )
}
export default RecentFeatures;