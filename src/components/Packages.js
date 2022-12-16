import "./PackagesStyles.css";
import {DataPackages} from "./DataPackages";
function Packages(props){
    return(
        <div className="Packagesall">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <div className="PackagesFeatures">
                {DataPackages.map((item,index) => {
                        return(
                            <div className="PackagesFeature">
                                <button className="best">Best Value</button>
                                <h3>{DataPackages[index].h3}</h3>
                                <h1><span>{DataPackages[index].span}</span>{DataPackages[index].h1}</h1>
                                <p>{DataPackages[index].p}</p> 
                                <div className="properties">     
                                    <div className="property">
                                            <i className={DataPackages[index].i1}></i>
                                            <h4>{DataPackages[index].h41}</h4>
                                    </div> 
                                    <div className="property">
                                            <i className={DataPackages[index].i2}></i>
                                            <h4>{DataPackages[index].h42}</h4>
                                    </div>                                 
                                    <div className="property">
                                            <i className={DataPackages[index].i3}></i>
                                            <h4>{DataPackages[index].h43}</h4>
                                    </div> 
                                    <div className="property">
                                            <i className={DataPackages[index].i4}></i>
                                            <h4>{DataPackages[index].h44}</h4>
                                    </div> 
                                    <div className="property">
                                            <i className={DataPackages[index].i5}></i>
                                            <h4>{DataPackages[index].h45}</h4>
                                    </div> 
                                </div>                                    
                                <button className="Start">{DataPackages[index].button}</button>                           
                            </div>   
                        )
            })}
            </div>
        </div>
    )
}
export default Packages; 