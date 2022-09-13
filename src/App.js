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

const App = () => (
  <Router>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
