import React from 'react';
import './Pokecard.css'

const Pokecard = ({ id, name, type, exp }) => {
  const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  console.log(name, imageLink)
  return (
    <div className="Pokecard-div">
      <h3>{name}</h3>
      <img src={imageLink} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
