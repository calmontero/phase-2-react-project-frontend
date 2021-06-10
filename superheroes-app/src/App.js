import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import HeroesContainer from './components/HeroesContainer/HeroesContainer';
import HeroesForm from "./components/HeroesForm/HeroesForm";

function App() {
  const [hero, setHero] = useState([]);

  //Recover the data
  useEffect(() => (
    fetch("http://localhost:3000/heroes")
      .then((response) => response.json())
      .then((heroData) => setHero(heroData))
  ),[]);

  function handleAddHero(newHero) {
    const updatedHeroes = [...hero, newHero];
    setHero(updatedHeroes);
  }

  function handleDeleteHero(id) {
    const updatedHeroes = hero.filter((heroList) => heroList.id !== id);
    setHero(updatedHeroes);
  }

  return (
    <div className="App">
      <Header />
      <HeroesForm onAddHero={handleAddHero} />
      <HeroesContainer heroesList={hero} onDeleteHero={handleDeleteHero} />
    </div>
  );
}

export default App;
