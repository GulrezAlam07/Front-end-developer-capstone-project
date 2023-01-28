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
                    <p>Jamia, New Delhi 110025</p>
                    <p>+91 9999999999</p>
                    <p>email@gmail.com</p>
                </section>
                <section>
                    {/*Social Media Links */}
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/gulrez__alam/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/gulrez.alam.7330/">Facebook</a></li>
                        <li><a href="https://twitter.com/7GulrezAlam">Twitter</a></li>
                    </ul>
                </section>
            </footer>
        </>
    )
}
