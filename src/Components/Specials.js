import { Link } from "react-router-dom";
import GreekSalad from "../assets/greek salad.jpg";
import Bruschetta from "../assets/bruchetta.jpg";
import LemonDessert from "../assets/lemon dessert.jpg";
import delivery_image from "../assets/delivery_black.png";

function Specials() {
  function scrollTop() {
    window.scroll({ top: 0, left: 0 });
  }
  return (
    <section className="specials">
      <article className="container">
        <div>
          <h2>Week's specials:</h2>
          <Link to="/order-online" className="order-btn">
            Online Menu
          </Link>
        </div>
        <div>
          <div className="card">
            <div className="img-container">
              <img src={GreekSalad} alt="Food" />
            </div>
            <div className="text">
              <div className="head">
                <h3>Greek Salad</h3>
                <span>$12.99</span>
              </div>
              <p>
                The farmous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <Link to="/order-online" onClick={scrollTop}>
                <div className="delivery">
                  <p>Order for delivery</p>
                  <img src={delivery_image} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={Bruschetta} alt="Food" />
            </div>
            <div className="text">
              <div className="head">
                <h3>Bruschetta</h3>
                <span>$5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <Link to="/order-online" onClick={scrollTop}>
                <div className="delivery">
                  <p>Order for delivery</p>
                  <img src={delivery_image} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={LemonDessert} alt="Food" />
            </div>
            <div className="text">
              <div className="head">
                <h3>Lemon Dessert</h3>
                <span>$5.00</span>
              </div>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <Link to="/order-online" onClick={scrollTop}>
                <div className="delivery">
                  <p>Order for delivery</p>
                  <img src={delivery_image} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Specials;
