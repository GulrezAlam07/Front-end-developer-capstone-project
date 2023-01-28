import image1 from "../assets/Mario and Adrian A.jpg";
import image2 from "../assets/Mario and Adrian b.jpg";
function About() {
  return (
    <section className="about">
      <article className="container">
        <div className="text">
          <div className="main">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className="images">
          <div className="image-container">
            <img src={image2} alt="Mario and Adrian"></img>
          </div>
          <div className="image-container">
            <img src={image1} alt="Mario and Adrian"></img>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
