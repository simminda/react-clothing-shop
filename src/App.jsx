import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';
import User from './pages/User';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNameSubmit = (name) => {
    if (name) {
      setIsLoggedIn(true);
    }
  };

  return (
      <Router>
        <div>
          <Header isLoggedIn={isLoggedIn} onNameSubmit={handleNameSubmit} />
          <Routes>

            <Route path="/" element={<LandingPage />} />
            
            <Route path="/products" element={<Products />} />

            <Route path="/about" element={<About />} />

            <Route path="/user" component={User} />

          </Routes>
          
          <Footer/>
        </div>
      </Router>
  );
};

export default App;


