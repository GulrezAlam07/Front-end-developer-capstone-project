import { Link } from "react-router-dom";
import Image from "../assets/restauranfood.jpg";
function HeroSection() {
  return (
    <section className="hero-section">
      <article className="container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">Reserve a Table</Link>
        </div>
        <div className="img">
          <img src={Image} alt="Restuarant Food" />
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
