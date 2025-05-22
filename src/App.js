import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Internships from './pages/Internships';
import Workshops from './pages/Workshops';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

    <section id="services">
          <Services />
        </section>

        <section id="internships">
          <Internships />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="workshops">
          <Workshops />
        </section>

        <section id="contact">
          <Contact />
        </section>

         <section id="footer">
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;
