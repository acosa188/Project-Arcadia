import React from 'react';
import Navbar from './Components/Navbar';
import ServicesNavbar from './Components/ServicesNavbar';
import ServicesContent from './Components/ServicesContent';
import ServiceInfoSection from './Components/ServiceInfoSection';
import ProjectsSection from './Components/ProjectsSection';
import TestimonialSection from './Components/TestimonialSection';
import Footer from './Components/Footer';
import { Container, Jumbotron } from 'react-bootstrap';
import './css-reset.css';
import './App.css';

function App() {
  return (
    <div className="Appwrapper">
      <Container>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Jumbotron fluid>
              <h2 className="company-title">ARCADIA</h2>
            </Jumbotron>
            <Jumbotron>
              <h1 className="company-motto">We evolve ideas & products into brands</h1>
            </Jumbotron>
            <ServicesNavbar />
            <ServicesContent />
            <ServiceInfoSection />
            <ProjectsSection />
            <TestimonialSection />
          </main>
        </div>
      </Container>

      
      <footer className="footerClass">
        <Footer />
      </footer>

    </div>

  );
}

export default App;
