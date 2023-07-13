import './inicio.css';

function abrirURL(url) {
  window.open(url, '_blank');
}

const Inicio = () => {
  return (
    <section id="inicio" className="section inicio-section meu-inicio-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="inicio-content">
          <div className="inicio-greeting">
            <p className="inicio-greeting-text">Olá mundo! Eu sou o Lucas Comaru</p>
          </div>
          <div className="inicio-react-developer">
            <div className="inicio-front-icons-container">
              <h3 className="inicio-front">FRONTEND</h3>
              <div className="inicio-icons-front">
                <img src="/github.png" alt="Ícone 1" id="icone-1" onClick={() => abrirURL('https://github.com')} />
                <img src="/linkedin.png" alt="Ícone 2" id="icone-2" onClick={() => abrirURL('https://linkedin.com')} />
                <img src="/whatsapp.png" alt="Ícone 3" id="icone-3" onClick={() => abrirURL('https://whatsapp.com')} />
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
      <div className="bolinhas"></div>
    </section>
  );
};

export default Inicio;
