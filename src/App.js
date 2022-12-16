import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog";
import Pricing from "./routes/Pricing";
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/LogIn" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
