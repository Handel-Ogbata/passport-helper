import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/layout/Navbar';
import Home from './pages/Home';
import Application from './pages/Application';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="main-content">
          <main className="container py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/application" element={<Application />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
