// * dependencies 
import React from 'react';


const PlayerCard = (props) => {

    console.log("card data:", props.data)

    return(
        <div className="player-card-container">
            <h2 className="card-container__name">{props.data.name}</h2>
            <h2 className="card-container__country">{props.data.country}</h2>
            <h2 className="card-contaienr__search">{props.data.searches}</h2>
        </div>
    )
}

export default PlayerCard;