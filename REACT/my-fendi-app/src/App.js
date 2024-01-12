// App.js
import React from 'react';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Jumbotron from './Components/Jumbotron';
import Cards from './Components/Cards';
import ProgressBars from './Components/ProgressBarsandBadges';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
        
      <Navbar />
      <Carousel />
      <Jumbotron />
      <Cards />
      <ProgressBars />
      <Footer />
    </div>
  );
}

export default App;
