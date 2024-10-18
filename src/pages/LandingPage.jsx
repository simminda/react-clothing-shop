import React, { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: './images/backgrounds/mnz-AIE1_Kp5Zp4-unsplash.jpg',
      description: 'The hottest threads, at the coolest prices!',
    },
    {
      image: './images/backgrounds/parker-burchfield-tvG4WvjgsEY-unsplash.jpg',
      description: 'Proudly SA. Premium quality clothing.',
    },
    {
      image: './images/backgrounds/keagan-henman-Won79_9oUEk-unsplash.jpg',
      description: 'Quality never goes out of fashion.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mainBody" >
        {/* enter button  */}
        <Link to="/products" className="nav-link" id="enterLink">
          <img src="./images/enter-rbg.png" alt="enter button" id="enter"></img>
        </Link>

        {/* main banner */}
        <img
          className="backgroundImage"
          src={slides[currentSlide].image}
          alt="Background"
          width='100%'
          height='960px'
        />
        <div className="content">
        <h3 className="slide-description">{slides[currentSlide].description}</h3>
        </div>
      </div>

    </>
  );
};

export default LandingPage;

