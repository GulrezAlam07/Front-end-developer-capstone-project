import { Link } from "react-router-dom"
import arrow from "./icons_assets/arrow.png"

export const Arrow = () =>{
    return(
        <>
            <div className="back_container">
                <Link className="back" to="/">
                    <img src={arrow}/>
                </Link>
            </div>
        </>
    )
}