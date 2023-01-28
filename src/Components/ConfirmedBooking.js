import { useNavigate } from "react-router";
function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <section className="confirmed-booking">
      <article className="container">
        <h2>Your booking has been confirmed!</h2>
        <div>
          <h3>Booking Details:</h3>
          <ul>
            <li>
              Date:{" "}
              <span>{JSON.parse(localStorage.getItem("booking")).date}</span>
            </li>
            <li>
              Time:{" "}
              <span>{JSON.parse(localStorage.getItem("booking")).time}</span>
            </li>
            <li>
              Diners:{" "}
              <span>{JSON.parse(localStorage.getItem("booking")).diners}</span>
            </li>
            <li>
              Occasion:{" "}
              <span>
                {JSON.parse(localStorage.getItem("booking")).occasion}
              </span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("booking");
            navigate("/Little-Lemon");
          }}
        >
          Cancel
        </button>
      </article>
    </section>
  );
}

export default ConfirmedBooking;
