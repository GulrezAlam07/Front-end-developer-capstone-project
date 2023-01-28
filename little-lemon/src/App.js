import './App.css';
import { Main } from './Main';
import {Route, Routes} from "react-router-dom"
import Reservation from './Reservation';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/reservation" element={<Reservation/>}/>
    </Routes>
  )
}

export default App;
