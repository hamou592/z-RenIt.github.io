import HeroSecond from "../components/HeroSecond";
import hero from "../assets/apartment2.jpg";
import story from "../assets/story.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Story from "../components/Story";
var bg_img = {
    //adding dynamic background to the hero page
    backgroundImage: `url(${hero})`,
}
function About(){
    return(
        <>
            <Navbar />
            <HeroSecond heroImg = {bg_img}   p="About Us" h2="About Us - Who We Are ?"/>
            <Story h1="Our Agency Story" img={story} button="More About Us" p1="Check out our company Story and work process" />
            <Question />
            <Footer />
        </>

    )
}
export default About;