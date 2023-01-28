import restauranfood from "./icons_assets/restauranfood.jpg"
import GreekSalad from "./icons_assets/greek salad.jpg"
import Bruchetta from "./icons_assets/bruchetta.svg"
import LemonDessert from "./icons_assets/lemon dessert.jpg"
import portrait1 from "./icons_assets/portrait1.jpg"
import portrait2 from "./icons_assets/portrait2.jpg"
import portrait3 from "./icons_assets/portrait3.jpg"
import portrait4 from "./icons_assets/portrait4.jpg"
import chef1 from "./icons_assets/Mario and Adrian A.jpg"
import chef2 from "./icons_assets/Mario and Adrian b.jpg"
import { Button } from "./Button"
import { Header } from "./Header"
import { Footer } from "./Footer"


export function Main(){
    return(
        <>
        <Header/>
        <main>
            <section id="home" className="Hero_container">
                <div className="hero_bio">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are family owned
                        Mediterranean restaurant,
                        focused on traditional recipes
                         served with a modern twist</p>
                    <Button link="/reservation" text="Reserve a table"></Button>
                </div>
                <div className="hero_img">
                    <img src={restauranfood} alt="Restaurant food"></img>
                </div>
            </section>

            <section className="Highlights_container">
                <div className="highlights_h1">
                    <h1>This week specials!</h1>
                    <div>
                        <Button link="https://google.com" text="Online Menu"></Button>
                    </div>
                </div>
                <div className="highlights_cards">
                    <div className="highlights_card">
                        <img alt="Greek Salad" src={GreekSalad}></img>
                        <div className="name_price">
                            <h3>Greek Salad</h3>
                            <h4>$12.99</h4>
                        </div>
                        <p className="dish_bio">The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary croutons. </p>
                        <p className="dish_p">Order a delivery</p>
                    </div>
                    <div className="highlights_card">
                        <img alt="Bruchetta" src={Bruchetta}></img>
                        <div className="name_price">
                            <h3>Greek Salad</h3>
                            <h4>$12.99</h4>
                        </div>
                        <p className="dish_bio">The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary croutons. </p>
                        <p className="dish_p">Order a delivery</p>
                    </div>
                    <div className="highlights_card">
                        <img alt="Greek Salad" src={LemonDessert}></img>
                        <div className="name_price">
                            <h3>Greek Salad</h3>
                            <h4>$12.99</h4>
                        </div>
                        <p className="dish_bio">The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese, garnished
                            with crunchy garlic and rosemary croutons. </p>
                        <p className="dish_p">Order a delivery</p>
                    </div>
                </div>
            </section>
            <section className="Testimonials_container">
                <div className="Testimonials_h1">
                    <h1>Testimonials</h1>
                </div>
                <div className="Testimonial_cards">
                    <div className="Testimonial_card">
                        <h3 className="Rating">5.0/5.0</h3>
                        <div className="rating_bio">
                            <img alt="user portrait" src={portrait1}></img>
                            <h3>Katie</h3>
                        </div>
                        <p className="response">Perfectly cooked Greek Salad. Exactly what I wanted!!!</p>
                    </div>
                    <div className="Testimonial_card">
                        <h3 className="Rating">3.0/5.0</h3>
                        <div className="rating_bio">
                            <img alt="user portrait" src={portrait2}></img>
                            <h3>John</h3>
                        </div>
                        <p className="response">Really enjoyed Greek Salad, but Lemon dessert could be better.</p>
                    </div>
                    <div className="Testimonial_card">
                        <h3 className="Rating">4.0/5.0</h3>
                        <div className="rating_bio">
                            <img alt="user portrait" src={portrait3}></img>
                            <h3>Erling</h3>
                        </div>
                        <p className="response">Nice!!!!!</p>
                    </div>
                    <div className="Testimonial_card">
                        <h3 className="Rating">5.0/5.0</h3>
                        <div className="rating_bio">
                            <img alt="user portrait" src={portrait4}></img>
                            <h3>Matthew</h3>
                        </div>
                        <p className="response">Fast delivery. Tasty dinner for an affordable price.</p>
                    </div>
                </div>
            </section>
            <section id="about" className="About_container">
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
        </main>
        <Footer/>
        </>
    )
}