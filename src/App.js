import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';

const App = () => (
  <Router>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
