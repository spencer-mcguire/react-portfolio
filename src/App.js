import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <Landing />
      </section>
    </div>
  );
}

export default App;
