import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import CustomCursor from "./components/CustomCursor"; // Import here

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-container relative z-0 bg-primary">
        <CustomCursor /> {/* Ensure it's inside the main container */}
        <Navbar />
        <div className="wrapper">
          <div id="hero">
            <Hero />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
