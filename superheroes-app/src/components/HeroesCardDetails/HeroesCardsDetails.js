import React from "react";
import './HeroesCardDetails.css';

function HeroesCardDetails({ hero }) {
    return (
        <div className="hero-card" >
            <h2>{hero.name}</h2>
            <img
                src={hero.image}
                alt={hero.name}
                className="hero-avatar"
            />
            <p>Real Name</p>
            <p>Publisher: {hero.publisher}</p>
            <p>Alignment: {hero.alignment}</p>
        </div>
    );
}

export default HeroesCardDetails;
