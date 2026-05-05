import "./App.css";
import Footer from "./components/Layout/Footer";

import Navbar from "./components/Layout/Navbar";
import About from "./components/Section/About";
import Contact from "./components/Section/Contract";
import Hero from "./components/Section/Hero";
import Projects from "./components/Section/Project";
import Services from "./components/Section/Services";
import Skills from "./components/Section/Skills";
import Testimonials from "./components/Section/Testimonials";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Services></Services>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
