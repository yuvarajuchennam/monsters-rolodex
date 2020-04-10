import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h5>{props.monster.name}</h5>
        <span>{props.monster.email}</span>
    </div>
);