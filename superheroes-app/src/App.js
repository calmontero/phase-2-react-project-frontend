import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import HeroesContainer from './components/HeroesContainer/HeroesContainer';
import HeroesForm from "./components/HeroesForm/HeroesForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [hero, setHero] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleHide() {
    setShowForm(false);
  }

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
      {showForm ? <HeroesForm onAddHero={handleAddHero} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>More</button>
        <button onClick={handleHide} >Less</button>
      </div>
      <HeroesContainer heroesList={hero} onDeleteHero={handleDeleteHero} />
    </div>
  );
}

export default App;
