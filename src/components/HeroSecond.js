import "./HeroStyles.css";
function HeroSecond(props){
    return(
        <div style={props.heroImg} className="heroSecond">
            <div className="heroSecond_bg">
                <p>{props.p}</p>
                <h2 className="heroSecond_text">{props.h2}</h2>
            </div>
            
        </div>
    )
}
export default HeroSecond;