import { Box } from "@chakra-ui/react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Values from "./Components/Values";
import WorkFlow from "./Components/WorkFlow";

function App() {
  return (
      <Box >
        <Navbar />
        <Banner/>
        <Services/>
        <WorkFlow/>
        <Portfolio/>
        <About/>
        <Team/>
        <Values/>
        <Contact/>
        <Footer/>
      </Box>
  );
}

export default App;
