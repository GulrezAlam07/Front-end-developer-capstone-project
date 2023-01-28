import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../style.css";

function Header() {
  function toggleMenu(e) {
    if (!e.target.nextSibling.classList.contains("visible-f")) {
      e.target.nextSibling.classList.toggle("visible-f");
      e.target.style.cssText =
        "color: white; position: fixed; height: fit-content; top: 10px; right: 20px";
      e.target.className = "fa-solid fa-xmark";
    } else {
      e.target.nextSibling.classList.toggle("visible-f");
      e.target.style.cssText =
        "color: var(--main); position: relative; height: 100%; top: 0; right: 0";
      e.target.className = "fa-solid fa-bars";
    }
  }

  function removeMenu(e) {
    if (!e.target.parentElement.parentElement.classList.contains("visible-f")) {
      e.target.parentElement.parentElement.classList.toggle("visible-f");
      e.target.parentElement.parentElement.previousSibling.style.cssText =
        "color: white; position: fixed; height: fit-content; top: 10px; right: 20px";
      e.target.parentElement.parentElement.previousSibling.className =
        "fa-solid fa-xmark";
    } else {
      e.target.parentElement.parentElement.classList.toggle("visible-f");
      e.target.parentElement.parentElement.previousSibling.style.cssText =
        "color: var(--main); position: relative; height: 100%; top: 0; right: 0";
      e.target.parentElement.parentElement.previousSibling.className =
        "fa-solid fa-bars";
    }
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/Little-Lemon">
          <img className="logo" src={Logo} alt="Little Lemon" />
        </Link>
        <nav>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <menu>
            <li>
              <Link to="/Little-Lemon" onClick={removeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={removeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/specials" onClick={removeMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={removeMenu}>
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online" onClick={removeMenu}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={removeMenu}>
                Login
              </Link>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
}

export default Header;
