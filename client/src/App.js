import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/layout/Navbar';
import Home from './pages/Home';
import Application from './pages/Application';
import Reviews from './pages/Reviews';
import Report from './pages/Report';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/application" element={<Application />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/report" element={<Report />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
