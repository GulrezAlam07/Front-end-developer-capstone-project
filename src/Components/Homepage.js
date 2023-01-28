// import { Route, Routes } from "react-router";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";
import About from "./About";
function Homepage() {
  return (
    <>
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}
export default Homepage;
