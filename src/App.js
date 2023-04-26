import './App.css';
import Pesquisa from './components/pesquisa';
import Resultado from './components/resultado';
import { Routes, Route } from "react-router-dom";
import Curriculo from './components/curriculo';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path = "/" element = {<Pesquisa/>} />
        <Route path = "resultado" element = {<Resultado/>} />
        <Route path = "/curriculo" element = {<Curriculo/>} />


      </Routes>

    </div>
  );
}

export default App;
