import Logo from "./icons_assets/Asset 20@4x.png"

export function Footer(){
    return(
        <>
            <footer>
                <section className="footer_logo">
                    <img alt="logo" src={Logo}></img>
                </section>
                <section>
                    {/*Doormat navigation */}
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="/reservation">Reservations</a></li>
                    </ul>
                </section>
                <section>
                    {/*Contact */}
                    <h3>Contact</h3>
                    <p>W Adams 61 Str. Chicago</p>
                    <p>+9999999999</p>
                    <p>email@gmail.com</p>
                </section>
                <section>
                    {/*Social Media Links */}
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/avd.dima03/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/">Facebook</a></li>
                        <li><a href="https://twitter.com/avdima03">Twitter</a></li>
                    </ul>
                </section>
            </footer>
        </>
    )
}