import { useEffect, useState } from "react";
import { callBDD } from "../assets/functions";
import NavPage from "./navPage";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [listCharacters, setListCharacters] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPages] = useState(1);

  const addList = (page) => {
    callBDD(page).then((data) =>{
      const newData = characters.concat(data.results)
      setCharacters(newData)
      setListCharacters(newData)
    })
  };

  useEffect(() => {
    addList(page)
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    searchFilter(e.target.value);
  };

  const searchFilter = (busquedaRealizada) => {
    let resultadosBusqueda = listCharacters.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(busquedaRealizada.toLowerCase())
      ){
        return elemento;
      }
    });
    setCharacters(resultadosBusqueda);
  };
  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={busqueda}
          placeholder="busqueda por nombre"
          onChange={handleChange}
        />
      </div>
      {
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character}/>
            </div>
          );
        })}
      </div>
    }
      <NavPage page={page} setPages={setPages} addList={addList}/>
    </div>
 
  );
}

export default CharacterList;
