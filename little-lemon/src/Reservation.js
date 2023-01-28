import { useState } from "react";
import Logo from "./icons_assets/Logo.svg"
import { Arrow } from "./Arrow";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Reservation = () =>{
    const [numPeople, setNumPeople] =useState(1)
    const [date, setDate] =useState("2023-02-03")
    const [time, setTime] =useState("09:00")
    const [name, setName] =useState("")
    const [email, setEmail] =useState("")

    const navigate = useNavigate()

    const changeNum = (e) =>{
        setNumPeople(e.target.value)
    }
    const changeDate = (e) =>{
        setDate(e.target.value)
    }
    const changeTime = (e) =>{
        setTime(e.target.value)
    }
    const changeName = (e) =>{
        setName(e.target.value)
    }
    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const setAlert = (event) =>{
        event.preventDefault()
        alert(`You have succesfully reserved table at ${time} on ${date} for ${numPeople} people. We will send you  reminder on your email one day before reservation`)
        navigate("/")
    }

    return(
        <>
            <header>
                <div className="reserv_header">
                    <Arrow/>
                    <Link className="navlogo" to="/">
                        <img  alt="logo" src={Logo}></img>
                    </Link>
                </div>
            </header>
            <main className="reservation_main">
                <section className="reserve_main_img"/>
                <section className="reserve_main_bio">
                    <h1 className="reservation_heading">Reserve a table</h1>
                    <p className="reservation_para">Reserve a table at our fascinating restaurant at W Adams Str. 61, Chicago. Enjoy charming atmosphere and high-class food.</p>
                </section>
                <form onSubmit={setAlert} className="reservation">
                    <div className="reservation_data">
                        <h3>Full name:</h3>
                        <div>
                            <input value={name} onChange={changeName} type="text" required/>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="reservation_data">
                        <h3>Email:</h3>
                        <div>
                            <input value={email} onChange={changeEmail} type="email" required/>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="reservation_data">
                        <h3>Number of people:</h3>
                        <div>
                            <input type="range" class="num_people" name="num_people" min="1" max="6" value={numPeople} onChange={changeNum} required/>
                            <label id="numpeople_label" for="num_people">{numPeople}</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="reservation_data">
                        <h3>Date:</h3>
                        <div>
                            <input value={date} onChange={changeDate} type="date" required/>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="reservation_data">
                        <h3>Time:</h3>
                        <div>
                            <input value={time} min="12:00" max="22:00" onChange={changeTime} type="time" required/>
                        </div>
                    </div>
                        <input type="submit" className="submit_button"></input>
                </form>
            </main>
        </>
    )
}
export default Reservation
