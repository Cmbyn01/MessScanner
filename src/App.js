import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ScanScreen from './components/ScanScreen';
function App() {
  return (
    <div>
      <Header />
      
      <div className="custom-margin">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/scan-screen' element={<ScanScreen />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
