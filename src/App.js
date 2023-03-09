import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Warehousing from './components/Warehousing';
import { Home } from './components/Home';
import Footer from './components/Footer';
import Location from './components/Location';
import Transportation from './components/Transportation';
import Deliveries from './components/Deliveries';
import Contact from './components/Contact';
import About from './components/About';
import SpecialEquipment from './components/SpecialEquipment';

function App() {

  

  return (
    <div className="App">
      <NavBar />
      <div className='routing'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/special" element={<SpecialEquipment />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
      <Location />
      <Footer />
    </div>
  );
}

export { App }