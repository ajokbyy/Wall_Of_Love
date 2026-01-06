import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import GenderCategory from './components/GenderCategory';

function App() {
  return (
    <div className="App content-wrapper">
      <Navbar />
      <HeroSlider />
      <GenderCategory />
      <main className="main-content">
        <section id="home" className="section">
          <h1>Welcome to Wall of Love</h1>
          <p>Discover amazing testimonials and social proof from our community.</p>
        </section>
        <section id="wall-of-love" className="section">
          <h2>Wall of Love</h2>
          <p>Here you'll see the social proofs and testimonials.</p>
          {/* TODO: Add Wall of Love component here */}
        </section>
        <section id="about" className="section">
          <h2>About</h2>
          <p>Learn more about our project and mission.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
