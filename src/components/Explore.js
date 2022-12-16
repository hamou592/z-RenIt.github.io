import "./ExploreStyle.css";
import {DataExplore} from "./DataExplore";
function Features(props){
    return(
        <div className="Exploreall">
            <h1>{props.h1}</h1>
            <p className="Exploreheader">{props.p}</p>
            <div className="Explores">
            {DataExplore.map((item,index) => {
                        return(
                            <div className="Explore">
                                <div className="bgExplore">
                                    <h2>{DataExplore[index].h2}</h2>
                                    <h2>{DataExplore[index].h}</h2>
                                    <div className="flex">
                                        <p>{DataExplore[index].h5}</p>
                                        <p>{DataExplore[index].h4}</p>
                                        <p>{DataExplore[index].h3}</p>
                                    </div>
                                </div>                                
                            </div>
                        )
            })}
            </div>
        </div>
    )
}
export default Features; 