import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/QuotePage.css';

const QuotePage = () => {
  const [mathQuote, setMathQuote] = useState({});
  const mathQuoteAPI = 'https://random-math-quote-api.herokuapp.com/';
  useEffect(() => {
    axios
      .get(mathQuoteAPI)
      .then((response) => {
        setMathQuote(response.data);
      });
  }, []);
  const { author, quote } = mathQuote;
  return (
    <div className="quote-page">
      <p className="text">
        { quote }
        {' '}
        <span className="author">
          -
          {' '}
          { author }
        </span>
      </p>
    </div>
  );
};

export default QuotePage;
