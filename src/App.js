import React from 'react';
import Header from './Components/Header';
import ServicesNavbar from './Components/ServicesNavbar';
import ServicesContent from './Components/SevicesContent';
import ServiceInfoSection from './Components/ServiceInfoSection';
import ProjectsSection from './Components/ProjectsSection';
import TestimonialSection from './Components/TestimonialSection';
import './css-reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <h2 className="company-title">ARCADIA</h2>
        <h1 className="company-motto">We evolve ideas & products into brands</h1>
        <ServicesNavbar />
        <ServicesContent />
        <ServiceInfoSection />
        <ProjectsSection />
        <TestimonialSection />
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
