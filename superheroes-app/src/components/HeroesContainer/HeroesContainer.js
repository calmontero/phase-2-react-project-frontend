import React from "react";
import HeroesCard from "../HeroesCard/HeroesCard";

function HeroesContainer({ heroesList }) {
    function populateList() {
        return heroesList.map((heroes) => (
            <HeroesCard heroesList={heroes} key={heroes.id} />
        ));
    }

    return (
        <div id="hero-collection">
            {populateList()}
        </div>
    );
}

export default HeroesContainer;