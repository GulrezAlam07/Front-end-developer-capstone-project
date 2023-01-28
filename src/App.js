import { Route, Routes } from "react-router";
import { useReducer } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Homepage from "./Components/Homepage.js";
import About from "./Components/About.js";
import BookingForm from "./Components/BookingForm.js";
import Footer from "./Components/Footer.js";
import OrderOnline from "./Components/OrderOnline";
import Specials from "./Components/Specials";
import Login from "./Components/Login";
import ConfirmedBooking from "./Components/ConfirmedBooking";
import * as Api from "./Components/Api";

function App() {
  function updateTimes(state, action) {
    return (state = Api.fetchAPI(new Date(action.selectedDate)));
  }

  function initializeTimes() {
    let date = new Date();
    return Api.fetchAPI(date);
  }

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  function submitForm(formData) {
    return Api.submitAPI(formData);
  }

  function scrollToTop(e) {
    window.scrollTo({ top: 0, left: 0 });
  }

  window.onscroll = () => {
    let scrollBtn = document.querySelector(".scroll-top");
    if (window.scrollY >= 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/Little-Lemon" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route
            path="/booking"
            element={
              <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                submitForm={submitForm}
              />
            }
          />
        </Routes>
        <button className="scroll-top" onClick={scrollToTop}>
          <span></span>
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
