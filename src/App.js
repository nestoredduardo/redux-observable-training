import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCharacters } from './redux/characters/characterActions';

function App({ charactersList, getCharacters, fetching }) {
  useEffect(() => {
    getCharacters();
  }, []);

  const mainApp = () => {
    if (fetching) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <h2>Lista de personajes</h2>
        <ul className="flex flex-col items-center">
          {charactersList.map((character) => {
            return (
              <li
                className="w-1/4 border-2 border-blue-400 p-4 rounded-lg m-2"
                key={character.id}
              >
                {character.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      {mainApp()}
    </div>
  );
}

const mapStateToProps = ({ characters }) => {
  return {
    charactersList: characters.charactersList,
    fetching: characters.fetching,
  };
};

const mapDispatchToProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
