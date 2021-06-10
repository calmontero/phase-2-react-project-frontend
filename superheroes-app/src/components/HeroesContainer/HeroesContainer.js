import React from "react";
//import { Route, useRouteMatch } from "react-router-dom";
import HeroesCard from "../HeroesCard/HeroesCard";
import HeroesCardDetails from "../HeroesCardDetails/HeroesCardsDetails";

function HeroesContainer({ heroesList,onDeleteHero }) {

    function populateList() {
        return heroesList.map((heroes) => (
            <HeroesCard heroesList={heroes} key={heroes.id} onDeleteHero={onDeleteHero} />
        ));
    }
/*
    function showHeroDetails(id) {
        return heroesList.find(h => h.id === 3);
    }
    console.log(showHeroDetails());*/
    return (
        <div id="hero-collection">
            {populateList()}

        </div>
    );
}

export default HeroesContainer;