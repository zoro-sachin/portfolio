import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
<<<<<<< HEAD
import ParticleBackground from './components/common/ParticleBackground';
=======
import AnimatedBackground from './components/common/AnimatedBackground';
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
<<<<<<< HEAD
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './styles/App.css';
=======
import Dashboard from './pages/Dashboard';
import './styles/App.css';
import './styles/HomeBehance.css';
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="App">
        <ParticleBackground />
=======
      <div className="App light-theme">
        <AnimatedBackground />
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
            <Route path="/login" element={<Login />} />
=======
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;