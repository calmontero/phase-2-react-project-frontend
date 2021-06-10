import React from "react";
import { useParams } from "react-router-dom";

function HeroesCardDetails({ hero }) {
    const params = useParams();
    console.log(params);

    return (
        <div >
            <h3>{hero[params.id].name}</h3>
        </div>
    );
}

export default HeroesCardDetails;