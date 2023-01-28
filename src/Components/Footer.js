import Logo from "../assets/FooterLogoGreen.png";
import { Link } from "react-router-dom";

function Footer() {
  function clickHandler() {
    window.scroll({ top: 0, left: 0 });
  }
  return (
    <footer>
      <div className="container">
        <Link to="/Little-Lemon">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="f-nav">
          <p>Doormat Navigation</p>
          <ul>
            <li>
              <Link to="/Little-Lemon" onClick={clickHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={clickHandler}>
                About
              </Link>
            </li>
            <li>
              <Link to="/specials" onClick={clickHandler}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={clickHandler}>
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online" onClick={clickHandler}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={clickHandler}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="f-contact">
          <p>Contact</p>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="f-social">
          <p>Social Media Links</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
