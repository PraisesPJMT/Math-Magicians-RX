import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/" element={<Calculator />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
