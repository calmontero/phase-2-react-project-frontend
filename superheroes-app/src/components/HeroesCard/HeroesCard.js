import React, { useState } from "react";
import './HeroesCard.css';

function HeroesCard({ heroesList, onDeleteHero }) {
    const { id, name, realname, image, isFavorite, publisher, alignment } = heroesList;
    const [isFav, setFav] = useState(isFavorite);

    function handleDeleteClick(e) {
        fetch(`https://json-server-pj-backend.herokuapp.com/heroes/${id}`, {
            method: "DELETE",
          });
          onDeleteHero(id);
    }

    function handleUpdateClick() {
        fetch(`https://json-server-pj-backend.herokuapp.com/heroes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                isFavorite: !isFav
            }),
            })
        .then((response) => response.json())
        .then((updateHero) => {
            
      });
        
    }

    return (
        <div className="card" >
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                className="hero-avatar"
            />
            <div ><strong>Real Name:</strong> {realname} <br/> <strong>Publisher:</strong> {publisher} <br/> <strong>Alignment:</strong> {alignment} </div>

            <div className="details">
                {isFav ? (
                    <button onClick={() => {handleUpdateClick(); setFav(false)}} className="emoji-button favorite active">★</button>
                    ) : (
                    <button onClick={() => {handleUpdateClick(); setFav(true)}} className="emoji-button favorite">☆</button>
                    )}
                    <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
            </div>
            
        </div>
    );
}

export default HeroesCard;