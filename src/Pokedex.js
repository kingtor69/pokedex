import React from 'react';
import Pokecard from './Pokecard.js'
import pokies from './defaultPokemons.js';
import './Pokedex.css';

const Pokedex = ({deck}=pokies) => (
  <div className="Pokedex-div">
    {deck.map(c => (
      <Pokecard 
        key={c.id} 
        id={c.id}
        name={c.name} 
        type={c.type}
        exp={c.base_experience}
      />
    ))};
  </div>
)

export default Pokedex;
