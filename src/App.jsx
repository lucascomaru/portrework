import './App.css';
import Contato from './components/contato';
import Habilidades from './components/habilidades';
import Inicio from './components/inicio';
import Projetos from './components/projetos';
import Servicos from './components/servicos';
import Sobre from './components/sobre';

function App() {
  return (
    <div className="app-container">
      <div className="inicio-section">
        <Inicio />
      </div>
      <div className="projetos-section">
        <Projetos />
      </div>
      <div className="servicos-section">
        <Servicos />
      </div>
      <div className="habilidades-section">
        <Habilidades />
      </div>
      <div className="sobre-section">
        <Sobre />
      </div>
      <div className="contato-section">
        <Contato />
      </div>
    </div>
  );
}

export default App;
