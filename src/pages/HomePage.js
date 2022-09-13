import React from 'react';
import MathIcon from '../assets/math.png';
import CalculatorIcon from '../assets/calculator.png';
import './styles/HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <h2 className="subtitle">
      Welcome to our page!
    </h2>
    <div className="text-container">
      <p className="text">
        Maths is the foundation of all subjects and helps to improve brainpower.
        Our universe is made up of numbers. Maths has been at the centre of science,
        data handling, engineering, technology, finance, sports, marketing,
        space and research, and so on.
      </p>
      <img
        className="icon"
        src={MathIcon}
        alt="Math Icon"
      />
    </div>
    <div className="text-container">
      <img
        className="icon cal"
        src={CalculatorIcon}
        alt="Calculator Icon"
      />
      <p className="text">
        Use our beautiful, free online scientific calculator with basic features for
        evaluating addition, subtraction, multiplication, division, modulus and more.
      </p>
    </div>
  </div>
);

export default HomePage;
