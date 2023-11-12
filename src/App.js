import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import APVI from './APVI';
import Solar from './Solar';
import Pv from './Pv';
import Emissions from './Emissions';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Remove the NavigationMenu component from here */}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APVI" element={<APVI />} />
          <Route path="/pv" element={<Pv />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/Emissions" element={<Emissions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
