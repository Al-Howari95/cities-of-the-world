import {} from 'react-router-dom'
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


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Hedar from './Hedar';
// import Footer from './Footer';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Cities from './Cities';

// function App() {
//   const [selectedCountry, setSelectedCountry] = useState('');

//   return (
//     <Router>
//       <div className="App">
//         <Hedar />
//         <Routes>
//           <Route path="/ " element={<Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />} />
//           <Route path="/Cities" element={<Cities selectedCountry={selectedCountry} />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
// export default App;






















