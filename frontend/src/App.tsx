import React from 'react';
import getPokemon from './services/getPokemon'
import './App.css';

const App = () => {
  const [pokeNumber, setPokeNumber] = React.useState(0);
  const [pokeName, setPokeName] =  React.useState('');

  const handlePokeNumber = async (value: number) => {
    setPokeNumber(value)
    const pokemon = await getPokemon(value)

    setPokeName(pokemon.name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" min={1} max={900} value={pokeNumber} onChange={(e) => handlePokeNumber(Number(e.target.value))}/>
        <p>
          {pokeName}
        </p>
      </header>
    </div>
  );
}

export default App;
