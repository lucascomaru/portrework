import './inicio.css';

const Inicio = () => {
  return (
    <section id="inicio" className="section inicio-section">
      <div className="container">
        <div className="inicio-header">
          <h2 className="inicio-title"></h2>
          <div className="inicio-icons">
            <img src="#" alt="Ícone 1" />
            <img src="#" alt="Ícone 2" />
            <img src="#" alt="Ícone 3" />
          </div>
        </div>
        <div className="inicio-content">
          <div className="inicio-react-developer">
            <h3 className="inicio-react">FRONTEND</h3>
            <h4 className="inicio-developer">DEVELOPER</h4>
          </div>
          <div className="inicio-description-container">
            <p className="inicio-description">Eu sou o Lucas Comaru</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;

