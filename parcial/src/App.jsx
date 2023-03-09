import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

const App = () => {
  const [peli, setPeli] = useState({
    pelicula: "",
    actor: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
const handleSubmit = (event) => {
    event.preventDefault();
if (
      peli.pelicula.length >= 3 &&
      peli.pelicula.charAt(0) != " " &&
      peli.actor.length >= 6
    ) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={peli.pelicula}
          onChange={(e) => setPeli({ ...peli, pelicula: e.target.value })}
          placeholder="Ingrese su pelicula favorita"
        ></input>
        <br></br>
        <input
          type="text"
          value={peli.actor}
          onChange={(e) => setPeli({ ...peli, actor: e.target.value })}
          placeholder="Ingrese su actor favorito"
        ></input>
        <br></br>
        <button>Enviar</button>
      </form>
      {err ? (
        <h3 className="msj">
          "Porfi revisa que todo este ok"
        </h3>
      ) : null}
      {show && <Card pelicula={peli.pelicula} actor={peli.actor} />}
    </div>
  );
}};
export default App;