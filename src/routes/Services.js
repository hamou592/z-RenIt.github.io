import HeroSecond from "../components/HeroSecond";
import hero from "../assets/condos.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Features from "../components/Features";
var bg_img = {
    //adding dynamic background to the hero page
    backgroundImage: `url(${hero})`,
}
function Services(){
    return(
        <>
            <Navbar />
            <HeroSecond heroImg = {bg_img}   p="Services" h2="Services-All Services"/>
            <Features />
            <Question />
            <Footer />
        </>
    )
}
export default Services;