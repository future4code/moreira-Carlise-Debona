import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { useEffect, useState } from "react";

export default function App() {

  const [pokeName, setPokeName] = useState("");
  const [pokeList, setPokeList] = useState([]);

 
  useEffect(() => {
    
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => setPokeList(response.data.results))
      .catch(err => console.log(err))
  },[]);

  const onChangePokeName = (event) => {
    setPokeName(event.target.value);
  };

  
  
    return (
      <div className="App">
        
        <select onChange={onChangePokeName}>
          <option value={pokeName}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }



