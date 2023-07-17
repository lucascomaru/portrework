import './sobre.css'

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="texto">
        <h1>Sobre Mim</h1>
        <p>
        <p>Meu nome é Lucas Santos Marques Comaru, tenho 26 anos,
             sou carioca e moro em Fortaleza. Sou formado em Gastronomia,
              trabalhei alguns anos na área e em março de 2022,
               decidi deixar a cozinha e fui em busca de um meio para a realização dos meus objetivos de vida
               , encontrei a programação e me apaixonei pela área.
        </p>
        <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Unifor, em Fortaleza.</p>

        <p>Tenho domínio de Python, HTML, CSS e Javascript. Procuro sempre estar aprimorando minhas habilidades.</p>
        </p>
      </div>
      <div className="foto">
        <img src='./fotolucas.jpg' alt="Minha Foto" />
      </div>
    </div>
  );
};

export default Sobre;
