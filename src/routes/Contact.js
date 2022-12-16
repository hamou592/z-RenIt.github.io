import HeroSecond from "../components/HeroSecond";
import hero from "../assets/apartment2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import ContactFrom from "../components/ContactForm";
var bg_img = {
    //adding dynamic background to the hero page
    backgroundImage: `url(${hero})`,
}
function Contact(){
    return(
        <>
            <Navbar />
            <HeroSecond heroImg = {bg_img}   p="Blog" h2="Blog Grid-Our Blogs"/>
            <ContactFrom />
            <Question />
            <Footer />
        </>
    )
}
export default Contact;