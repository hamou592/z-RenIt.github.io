import "./StoryStyles.css";
function Story(props){
    return(
        <div className="Story">
            <div className="StoryFirst">
                <h1>{props.h1}</h1>
                <p className="firstP">{props.p1}</p>
                <p className="secondP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis doloribus dolore amet, deleniti laborum incidunt unde facere impedit iste soluta omnis officia dicta aliquam dolorum! Quisquam vitae reprehenderit itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis doloribus dolore amet, deleniti laborum incidunt unde facere impedit iste soluta omnis officia dicta aliquam dolorum! Quisquam vitae reprehenderit itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis doloribus dolore amet, deleniti laborum incidunt unde facere impedit iste soluta omnis officia dicta aliquam dolorum! Quisquam vitae reprehenderit itaque?
                </p>
                <button>{props.button}</button>
                </div>
            <div className="Storyimg">
                <img src={props.img}></img>
            </div>
        </div>
        
    )
}
export default Story;