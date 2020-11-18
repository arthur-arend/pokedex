import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import { usePokemon } from '../../contexts/pokemon';


const Menu: React.FC = () => {
  const [search, setSearch] = useState("");
  const { setPokemon } = usePokemon();

  //TODO tratar pesquisa vazia
  function handleSearch () {
    if(search!== ""){
      api
      .get(`pokemon/${search}`)
        .then((response) => {
            let vectorContent = [
              response.data.species
            ]
            setPokemon(vectorContent)
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

    setSearch("")
    } 
  }

  return (
    <Container>
      <input
        placeholder="Name"
        type="text" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="button" onClick={handleSearch}>Search</button>

    </Container>
  )
}

export default Menu;