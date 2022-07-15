

import  { useState, useEffect } from 'react';
import Cards from '../Shared/Cards'
import { Stack } from '@chakra-ui/react';

import { getPokemon, getAllPokemon } from '../Shared/pokemon';



function Container({props}) {
  const [pokemonData, setPokemonData] = useState([])
 
  
  const initialURL = ' https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
  
      await loadPokemon(response.results);  }
    fetchData();
  }, [])

 
  
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
   
       <Stack spacing='24px'
       bg='gray.200'
       direction={['row']}
       flexWrap='wrap'
       m ='auto'
       >
  {pokemonData
        .filter((item) => item.name.toLowerCase().includes(props.toLowerCase()))
        .map((poke,i) => (
          <Cards key={i} poke={poke} />
        ))}
    
      
         
        </Stack> 
   
  );
}



export default Container;