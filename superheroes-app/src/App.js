import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import HeroesContainer from './components/HeroesContainer/HeroesContainer';
import HeroesForm from "./components/HeroesForm/HeroesForm";
import HeroesSearch from "./components/HeroesSearch/HeroesSearch";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [hero, setHero] = useState([]);
  const [search, setSearch] = useState("");

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleHide() {
    setShowForm(false);
  }

  //Recover the data
  useEffect(() => (
    fetch("https://json-server-pj-backend.herokuapp.com/heroes")
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

  const displayHeroes = hero.filter((heroesList) => {
    return heroesList.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      {showForm ? <HeroesForm onAddHero={handleAddHero} /> : null}
      <br />
      {showForm ? <HeroesSearch  onSearch={search} onSearchChange={setSearch} /> : null}
      <br />
      <br />
      <ButtonGroup disableElevation variant="outlined" color="secondary">
        <Button onClick={handleClick} >More</Button>
        <Button onClick={handleHide} >Less</Button>
      </ButtonGroup>
      <HeroesContainer heroesList={displayHeroes} onDeleteHero={handleDeleteHero} />
    </div>
  );
}

export default App;
