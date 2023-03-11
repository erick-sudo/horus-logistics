import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Warehousing from './components/Warehousing';
import { Home } from './components/Home';
import Footer from './components/Footer';
import Location from './components/Location';
import Transportation from './components/Transportation';
import Deliveries from './components/Deliveries';
import { Contact, ConsultationForm } from './components/Contact';
import About from './components/About';
import SpecialEquipment from './components/SpecialEquipment';
import { useState } from 'react';

function App() {

  const [consultationFormVisible, setConsultationFormVisible] = useState(false)

  return (
    <div className="App">
      { consultationFormVisible ? <ConsultationForm setConsultationFormVisible={setConsultationFormVisible} /> : null }
      <NavBar />
      <div className='routing'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehousing" element={<Warehousing setConsultationFormVisible={setConsultationFormVisible} />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/special" element={<SpecialEquipment />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact setConsultationFormVisible={setConsultationFormVisible}/>} />
        </Routes>
      </div>
      <Location />
      <Footer />
    </div>
  );
}

export { App }