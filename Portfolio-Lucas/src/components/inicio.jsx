
import './inicio.css';

const Inicio = () => {
  return (
    <section id="inicio" className="section inicio-section meu-inicio-section">
      <div className="container">
        <div className="inicio-content">
          <div className="inicio-greeting">
            <p className="inicio-greeting-text">Olá mundo! Eu sou o Lucas Comaru</p>
          </div>
          <div className="inicio-react-developer">
            <div className="inicio-front-icons-container">
              <h3 className="inicio-front">FRONTEND</h3>
              <div className="inicio-icons-front">
                <img src="#" alt="Ícone 1" />
                <img src="#" alt="Ícone 2" />
                <img src="#" alt="Ícone 3" />
              </div>
            </div>
            <div className="inicio-dev-container">
              <h4 className="inicio-dev">DEVELOPER</h4>
              <div className="inicio-description-container">
                <p className="inicio-description">O ex-confeiteiro que virou programador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
