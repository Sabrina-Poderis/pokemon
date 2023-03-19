import React from 'react';
import getPokemon from './services/getPokemon'
import './App.css';

const App = () => {
  const pokeballImage = 'https://icons-for-free.com/download-icon-pikachu+pokeball+pokemon+icon-1320184857556086253_256.png'

  const [pokeNumber, setPokeNumber] = React.useState(0);
  const [pokeName, setPokeName] =  React.useState('pokeball');
  const [pokePicture, setPokePicture] =  React.useState(pokeballImage);

  const handlePokeNumber = async (value: number) => {
    setPokeNumber(value)

    if(value === 0){
      setPokeName('pokeball');
      setPokePicture(pokeballImage)
    } else {
      const pokemon = await getPokemon(value)

      if(pokemon){
        setPokeName(pokemon.name)
        setPokePicture(pokemon.sprites.front_default)
      } else {
        setPokeName('Pokemon not founded')
        setPokePicture(pokeballImage)
      }
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Team Rocket Pokemon Center!</h1>

        <p>Select the pokemon id and our associates will traffic it for you</p>

        <input className='input-number' type="number" min={1} max={900} value={pokeNumber} onChange={(e) => setPokeNumber(Number(e.target.value))}/>

        <button className="btn" type='button' onClick={() => handlePokeNumber(pokeNumber)}>Capture this pokemon</button>
        <p>{pokeName}</p>

        <div className="imageContainer">
          <img src={pokePicture} alt={`Picture of a ${pokeName}`}/>
        </div>
      </header>
    </div>
  );
}

export default App;
