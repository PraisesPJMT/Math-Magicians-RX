import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/" element={<Calculator />} />
      </Routes>
    </main>
  </Router>
);

export default App;
