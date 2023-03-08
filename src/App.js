import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Warehousing from './components/Warehousing';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  

  return (
    <div className="App">
      <NavBar />
      <div className='routing'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export { App }
