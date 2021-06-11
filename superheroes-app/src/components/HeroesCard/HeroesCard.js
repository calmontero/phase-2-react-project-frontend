import React, { useState } from "react";
import './HeroesCard.css';

function HeroesCard({ heroesList, onDeleteHero, onDetailsHero }) {
    const { id, name, realname, image, isFavorite, publisher, alignment } = heroesList;
    const [isFav, setFav] = useState(isFavorite);

    function handleDeleteClick(e) {
        fetch(`http://localhost:3000/heroes/${id}`, {
            method: "DELETE",
          });
      
          onDeleteHero(id);
    }

    function handleUpdateClick(e) {
        e.stopPropagation()
        setFav(!isFav);
    } 
/*
    function handleDetailsClick() {
        onDetailsHero(id);
    }*/

    return (
        <div className="card" >
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                className="hero-avatar"
            />
            <div >Real Name: {realname} <br/> Publisher: {publisher} <br/> Alignment: {alignment} </div>
            <div className="details">
                {isFav ? (
                    <button onClick={handleUpdateClick} className="emoji-button favorite active">★</button>
                    ) : (
                    <button onClick={handleUpdateClick} className="emoji-button favorite">☆</button>
                    )}
                    <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
                    {/*<button onClick={handleDetailsClick}>Details</button>*/}
            </div>
            
        </div>
    );
}

export default HeroesCard;