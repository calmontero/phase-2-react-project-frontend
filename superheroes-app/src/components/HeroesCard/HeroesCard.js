import React from "react";
import './HeroesCard.css';

function HeroesCard({ heroesList}) {
    const { id, name, image, isFavorite } = heroesList;

    return (
        <div className="hero-card">
        <h2>{name}</h2>
        <img
          src={image}
          alt={name}
          className="hero-avatar"
        />
        <p>{isFavorite} Favorite </p>
      </div>
    );
}

export default HeroesCard;