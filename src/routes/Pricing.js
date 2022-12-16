import HeroSecond from "../components/HeroSecond";
import hero from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Packages from "../components/Packages";
var bg_img = {
    //adding dynamic background to the hero page
    backgroundImage: `url(${hero})`,
}
function Pricing(){
    return(
        <>
            <Navbar />
            <HeroSecond heroImg = {bg_img}   p="Blog" h2="Blog Grid-Our Blogs"/>
            <Packages />
            <Question />
            <Footer />
        </>
    )
}
export default Pricing;