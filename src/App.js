import logo from './logo.svg';
import './App.css';
import {Characters} from './components/Characters';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]); //Hooks 

  function getCharacters(pageNumber =1){
    /* Promesa para el Api */
    const res = fetch('https://rickandmortyapi.com/api/character/?page=19')
                .then(response => response.json()) //Lo combierte a json con json()
                //.then(({results, info}) => {return {results}}) //desestructurar
                .then(({results}) => results) // solo devolver 'results'
                //.catch(() => {return []})
                .catch(() => []); // devolver un arreglo vacío en caso de error

                console.log('Res = ',res);
                return res;

  }

  async function consoleCharacters(){
    const resp = await  getCharacters();
    console.log('Resp = ',resp);

    setCharacters(resp);
  }

//useEffect se pone abajo de la funcionalidad para facilitale al compilador 
  useEffect(() =>{//hook para el ciclo de vida de un componente, requiere una funcion flecha y sobre qué paso estamos
    consoleCharacters();
  },[]); 

  return (
    <div className="App">
      <header className="Header">
        <img src="/img/logo.png" alt='Logo' className='Logo'/>
        <h1 className='Terms'>Terms + Conditions</h1>

      </header>
      <div className='Hero'>
        <h2 className='Hero-title'>Rick and Morty</h2>
        <h2 className='Hero-subtitle'>See all the characters.</h2>
        <h2 className='Hero-subtitle'>And more.</h2>

      </div>
      <main>
      <h2 className='main-title'>Characters List</h2>
        <hr className='custom-hr'></hr>
        <div className='card-container'>
        {
          (characters && characters.length > 0) && characters.map(character => (
            <Characters character={character}/>
          ))//Siempre verificar que la variable existe &&
          // map ayuda a recorrer un arreglo, es más recomendable cuando nos regresan elementos html
        }
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
