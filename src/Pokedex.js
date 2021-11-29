import React from 'react';
import Pokecard from './Pokecard.js'
import pokies from './defaultPokemons.js';
import './Pokedex.css';

const Pokedex = (props=pokies) => (
  <div className="Pokedex-div">
    {props.map(p => (
      <Pokecard 
        key={p.id} 
        id={p.id}
        name={p.name} 
        type={p.type}
        exp={p.base_experience}
      />
    ))};
  </div>
)

export default Pokedex;
