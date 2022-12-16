import "./AwardsStyle.css";
import { DataAwards } from "./DataAwards";
function Awards(props){
    return(
        <div className="AwardstAll">
            <h1>{props.h1}</h1>
            <p className="headerAwards">{props.p1}<br /> {props.p2} </p>
            <div className="RecentAwards">
                {DataAwards.map((item,index) => {
                            return(
                                <div className="RecentAward">
                                    <div className="img">
                                        <img src={DataAwards[index].img} />
                                    </div>                                    
                                    <h1>{DataAwards[index].h1}</h1>
                                    <p>{DataAwards[index].h4}</p>
                                </div>
                            )
                })}
            </div>
        </div>

    )
}
export default Awards;