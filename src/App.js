import Home from "./pages/HomePage/Home";
import HotelList from "./pages/hotelList/HotelList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./widgets/Footer";
import Hotel from "./pages/hotel/Hotel";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotels' element={<HotelList/>}/>
          <Route path='/hotel' element={<Hotel/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
