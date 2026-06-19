import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async (element) => {
    let pokemonId = 1
    const titleElement = document.querySelector('#app-title');
    document.title = 'Pokemon App';
    if(titleElement) titleElement.innerHTML = 'Pokemon App'
    //document.querySelector('#app-title').innerHTML = 'Pokemon App'
    //console.log("Hola mundo");
    //console.log(element);
    

    //! Crear los elementos Html
    const loadingParagraph = document.createElement('p');
    loadingParagraph.style.color = 'white';
    const pokemonImage = document.createElement('img');
    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');


    //! Configuraciones 
    loadingParagraph.textContent = 'Cargando...';
    nextBtn.textContent = 'Siguiente';
    prevBtn.textContent = 'Anterior';
    
    element.appendChild(loadingParagraph);
    element.appendChild(pokemonImage);
    element.appendChild(nextBtn);
    element.appendChild(prevBtn);

    //! Listeners de los botones
    nextBtn.addEventListener('click', async() => {
        loadingParagraph.textContent = ('Cargando siguiente pokemon...');
        pokemonId++;
        const pokemon = await getPokemonById(pokemonId);
        renderPokemon(pokemon); 
    });

    prevBtn.addEventListener('click', async() => {
        if(pokemonId === 1) return;
        loadingParagraph.textContent = ('Cargando siguiente pokemon...');
        pokemonId--; 
        const pokemon = await getPokemonById(pokemonId);
        renderPokemon(pokemon);
    });

    //! Renderizar pokemon
    const renderPokemon = (pokemon) => {
        pokemonImage.src = pokemon.image;
        loadingParagraph.textContent = `Pokemon  # ${pokemon.id} ${pokemon.name}`;
    }

    //! Hacer petición inicial
    const pokemon = await getPokemonById(pokemonId);
    renderPokemon(pokemon);
    //getPokemonById(1)
    //    .then(renderPokemon);

};