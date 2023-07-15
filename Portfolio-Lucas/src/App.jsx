import './App.css';
import Inicio from './components/inicio';
import Projetos from './components/projetos';
import Servicos from './components/servicos';

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
    </div>
  );
}

export default App;
