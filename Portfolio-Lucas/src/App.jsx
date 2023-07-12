import './App.css';
import Inicio from './components/inicio';
import Projetos from './components/projetos';

function App() {
  return (
    <div className="app-container">
      <div className="inicio-section">
        <Inicio />
      </div>
      <div className="projetos-section">
        <Projetos />
      </div>
    </div>
  );
}

export default App;
