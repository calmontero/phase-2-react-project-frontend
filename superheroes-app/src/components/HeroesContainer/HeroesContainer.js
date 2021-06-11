import React, { useState } from "react";
//import { Route, useRouteMatch } from "react-router-dom";
import HeroesCard from "../HeroesCard/HeroesCard";
import HeroesCardDetails from "../HeroesCardDetails/HeroesCardsDetails";

function HeroesContainer({ heroesList, onDeleteHero }) {
    const [heroFilter, setHeroFilter] = useState(null);

    function populateList() {
        return heroesList.map((heroes) => (
            <HeroesCard heroesList={heroes} 
                key={heroes.id} 
                onDeleteHero={onDeleteHero} 
                onDetailsHero={handleViewHero}
            />
        ));
    }

    function showHeroDetails(id) {
        const hero = heroesList.find(h => h.id === id)
            return <HeroesCardDetails hero={hero} />  
    }

    function handleViewHero(id) {
        if(heroFilter === null) {
            setHeroFilter(id);
        } else {
            setHeroFilter(null);
        }
    }

    return (
        <div id="hero-collection">
            {(heroFilter === null) ? populateList() : showHeroDetails(heroFilter) }
        </div>
    );
}

export default HeroesContainer;