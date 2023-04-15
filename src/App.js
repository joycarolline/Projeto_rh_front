import './App.css';
import Pesquisa from './components/pesquisa';
import Resultado from './components/resultado';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path = "/" element = {<Pesquisa/>} />
        <Route path = "resultado" element = {<Resultado/>} />


      </Routes>

    </div>
  );
}

export default App;
