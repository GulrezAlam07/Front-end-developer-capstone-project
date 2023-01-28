import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
function Testimonials() {
  return (
    <section className="testimonials">
      <article className="container">
        <h2>Testimonials</h2>
        <div>
          <div className="box">
            <h4>
              Rating: <span>{"★".repeat(5)}</span>
            </h4>
            <div className="user">
              <div className="image-container">
                <img src={user1} alt="user" />
              </div>
              <p>Aylin</p>
            </div>
            <p>I'd have my dinner at that restaurant anytime.</p>
          </div>
          <div className="box">
            <h4>
              Rating: <span>{"★".repeat(5)}</span>
            </h4>
            <div className="user">
              <div className="image-container">
                <img src={user2} alt="user" />
              </div>
              <p>Riley</p>
            </div>
            <p>I'm charmed by their delicious recipies!</p>
          </div>
          <div className="box">
            <h4>
              Rating: <span>{"★".repeat(4.5)}</span>
            </h4>
            <div className="user">
              <div className="image-container">
                <img src={user3} alt="user" />
              </div>
              <p>Alisa</p>
            </div>
            <p>Such a clean and nice restaurant!</p>
          </div>
          <div className="box">
            <h4>
              Rating: <span>{"★".repeat(4)}</span>
            </h4>
            <div className="user">
              <div className="image-container">
                <img src={user4} alt="user" />
              </div>
              <p>Marques</p>
            </div>
            <p>Loved the food I ordered.</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Testimonials;
