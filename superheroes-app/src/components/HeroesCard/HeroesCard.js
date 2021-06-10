import React, { useState } from "react";
import './HeroesCard.css';

function HeroesCard({ heroesList, onDeleteHero }) {
    const { id, name, image, isFavorite } = heroesList;
    const [isFav, setFav] = useState(isFavorite);

    function handleDeleteClick() {
        fetch(`http://localhost:3000/heroes/${id}`, {
            method: "DELETE",
          });
      
          onDeleteHero(id);
    }

    function handleUpdateClick() {
        console.log("Update");
    }

    return (
        <div className="hero-card" >
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                className="hero-avatar"
            />
            <div className="details">
                {isFav ? (
                    <button onClick={() => setFav(false)} className="emoji-button favorite active">★</button>
                    ) : (
                    <button onClick={() => setFav(true)} className="emoji-button favorite">☆</button>
                    )}
                    <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
            </div>
            
        </div>
    );
}

export default HeroesCard;