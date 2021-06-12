import React from "react";
import HeroesCard from "../HeroesCard/HeroesCard";

function HeroesContainer({ heroesList, onDeleteHero }) {

    function populateList() {
        return heroesList.map((heroes) => (
            <HeroesCard heroesList={heroes} 
                key={heroes.id} 
                onDeleteHero={onDeleteHero} 
            />
        ));
    }

    return (
        <div id="hero-collection">
            {populateList()}
        </div>
    );
}

export default HeroesContainer;