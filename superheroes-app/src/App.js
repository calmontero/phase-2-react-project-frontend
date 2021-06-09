import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import HeroesContainer from './components/HeroesContainer/HeroesContainer';

function App() {
  const [hero, setHero] = useState([]);

  //Recover the data
  useEffect(() => (
    fetch("http://localhost:3000/heroes")
      .then((response) => response.json())
      .then((heroData) => setHero(heroData))
  ),[]);

  return (
    <div className="App">
      <Header />
      <HeroesContainer heroesList={hero} />
    </div>
  );
}

export default App;
