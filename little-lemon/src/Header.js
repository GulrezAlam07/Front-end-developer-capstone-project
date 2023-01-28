import Logo from "./icons_assets/Logo.svg"
import {useState} from "react";
import { Link } from "react-router-dom";


export function Header(){

    const [burgerclass,setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class,setMenuClass] = useState("menu");
    const [isMenuClicked, setMenuClicked] = useState(false);

    const updateMenu = ()=>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setMenuClicked(!isMenuClicked);
    }

    return(
        <>
        <header>
            <div className="header">
                <Link className="navlogo" to="/">
                    <img  alt="logo" src={Logo}></img>
                </Link>
                <nav>
                    <ul className="navbar_container">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><Link to="/reservation">Reservations</Link></li>
                    </ul>
            </nav>
            <div className="burger-menu" onClick={updateMenu}>
                        <div className={burgerclass}></div>
                        <div className={burgerclass}></div>
                        <div className={burgerclass}></div>
            </div>
            </div>
            <div className={menu_class}>
                <ul className="menu_container">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About</a></li>
                    <li><Link to="/reservation">Reservations</Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}