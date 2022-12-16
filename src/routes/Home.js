import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import RecentFeatures from "../components/RecentFeatures";
import Awards from "../components/Awards"
import Explore from "../components/Explore"
import Footer from "../components/Footer"
import Agent from "../components/Agent"
import Packages from "../components/Packages";
import Question from "../components/Question";
function Home(){
    return(
        <>
            <Navbar />
            <Hero />
            <Features h1="Featured Property Types" p="Find All Type of Property" />

            <RecentFeatures h1="Recent Property Listed" p="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Dolores officiis sed aspernatur libero officia voluptates repudiandae facere, 
             nisi similique debitis maiores qui, totam impedit aut, 
             rerum quaerat tenetur facilis eveniet. "/>

            <Awards h1="Our Awards" p1="Over 1,24,000 + Happy User Being With Us" p2=" Still They Love Our Services " />

            <Explore h1="Explore By Location" p="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quaerat libero maxime illo perferendis, cum sequi,
             ut nostrum quo voluptas, laboriosam autem nihil saepe 
             sunt qui nobis possimus ullam perspiciatis non!"/>

            <Agent h1="Our Featured Agents" p="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Modi porro nostrum eum assumenda doloribus molestias voluptates est quas minus commodi expedita,
              ex cum, iste quo perferendis fugiat explicabo repellat ipsa." />

            <Packages h1="Select Your Package"  p="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Modi porro nostrum eum assumenda doloribus molestias voluptates est quas minus commodi expedita,
              ex cum, iste quo perferendis fugiat explicabo repellat ipsa."/>

            <Question />
            
            <Footer />
        </>

    )
}
export default Home;