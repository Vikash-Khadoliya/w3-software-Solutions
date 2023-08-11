import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Partners from "./components/Partners";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Cta from "./components/Cta";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Pricing from "./components/Pricing";

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <Partners />
      <About />
      <Benefits />
      <Skills />
      <Services />
      <Cta />
      {/* <Portfolio /> */}
      <Team />
      <Pricing />
    </>
  )
}

export default App
