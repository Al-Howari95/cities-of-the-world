import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from './Home';
import Cities from './Cities';
import Footer from './Footer';




function App() {


  return (
 <div>
<Navbar/>
<Hero/>
<Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
<Cities selectedCountry={selectedCountry} />
<Footer/>
 </div>
  );
}

export default App;
