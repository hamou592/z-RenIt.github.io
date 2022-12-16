import "./FeaturesStyles.css";
import {DataFeatures} from "./DataFeatures";
function Features(props){
    return(
        <div className="all">
            <h1>{props.h1}</h1>
            <p className="header">{props.p}</p>
            <div className="Features">
            {DataFeatures.map((item,index) => {
                        return(
                            <div className="Feature">
                                <img src={DataFeatures[index].img} />
                                <h3>{DataFeatures[index].h3}</h3>
                                <p>{DataFeatures[index].p}</p>
                            </div>
                        )
            })}
            </div>
        </div>
    )
}
export default Features; 