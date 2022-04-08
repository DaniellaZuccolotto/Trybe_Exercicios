import './App.css';
import Pokedex from './components/pokedex';
import Pokemon from './components/pokemon';
import data from './data'


function App() {
  return (
   <main>
    <Pokedex />
    <section> 
      {
      data.map((pokemon) => {
        return <Pokemon objeto={pokemon} key={pokemon.id} />
      })
      }      
    </section>
   </main>
  );
}

export default App;
