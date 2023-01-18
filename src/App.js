import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

export default function App() {

  const cardElements = data.map(card => {
      return (
            <Card 
                key={card.id}
                {...card}
          />
        )
    })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className='cards-list'>
            {cardElements}
        </section>
    </div>
  );
}


