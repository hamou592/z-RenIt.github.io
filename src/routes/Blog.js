import HeroSecond from "../components/HeroSecond";
import RecentFeatures from "../components/RecentFeatures";
import hero from "../assets/commercial.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
var bg_img = {
    //adding dynamic background to the hero page
    backgroundImage: `url(${hero})`,
}
function Blog(){
    return(
        <>
            <Navbar />
            <HeroSecond heroImg = {bg_img}   p="Blog" h2="Blog Grid-Our Blogs"/>
            <RecentFeatures />
            <Question />
            <Footer />
        </>
    )
}
export default Blog;