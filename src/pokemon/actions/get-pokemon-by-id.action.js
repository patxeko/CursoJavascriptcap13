import map from "underscore/cjs/map.js";

const pokemonCache = new Map();
/**
 * Fetch Pokemon information Poke API
 * @param {number} id 
 * @returns {Promise<object>} /Pokemon Information
 */
export const getPokemonById = async(id) => {

    if( pokemonCache.has(id)) {
        console.log('Servido de caché...');
        return pokemonCache.get(id);
    }
    console.log('Servido de bakcends...');
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    };
    pokemonCache.set(id,pokemonData);
    console.log({pokemonData});
    return pokemonData;
    //console.log({id});
    //throw new Error ('Pokemon no existe');
    /* fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
        console.log(response);
        return response.json();
    }) // Petición HTTP
    .then (data => {
        console.log({data});
    })
    .catch(error => {
        // console.error(error);
    })
    return {}*/

}