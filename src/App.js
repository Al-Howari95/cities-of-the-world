import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Cities from './Cities';
import Hero from './Hero';
import Footer from './Footer';


function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <Cities selectedCountry={selectedCountry} />
      <Footer />
    </div>
  );
}

export default App;