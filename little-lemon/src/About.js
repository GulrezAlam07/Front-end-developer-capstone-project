import chef1 from "./icons_assets/Mario and Adrian A.jpg"
import chef2 from "./icons_assets/Mario and Adrian b.jpg"

const About = () =>{
    <section className="About_container">
        <div className="About_txt">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Being relatively new restaurant, 2 years of experience,
                    we have built up a strong relationship with our customers,
                    and continue doing it. The best Mediterranean chefs in Chicago
                    came together to make your stomach full and mood happy.</p>
        </div>
        <div className="About_imgs">
            <img className="Chef1" alt="chef 1" src={chef1}></img>
            <img className="Chef2" alt="chef 2" src={chef2}></img>
        </div>
    </section>
}

export default About