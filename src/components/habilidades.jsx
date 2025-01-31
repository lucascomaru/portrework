import "./habilidades.css";

const Habilidades = () => {
  return (
    <div className="habilidades-container">
      <div className="half-container soft-skills">
        <h1 className="titulo-habilidades">Soft Skills</h1>
        <ul className="lista-soft-skills">
          <li>Comunicação</li>
          <li>Trabalho em equipe</li>
          <li>Gestão de tempo</li>
          <li>Resolução de problemas</li>
          <li>Inteligência Emocional</li>
        </ul>
      </div>
      <div className="half-container hard-skills">
        <h1 className="titulo-habilidades">Hard Skills</h1>
        <div className="icones-hard-skills">
          <img src="./github (1).png" alt="Ícone 5" />
          <img src="./python.png" alt="Ícone 1" />
          <img src="./powerbi.png" alt="Ícone 5" />
          <img src="./database.png" alt="Ícone 5" />
          <img src="./js.png" alt="Ícone 2" />
          <img src="./html.png" alt="Ícone 3" />
          <img src="./css-3.png" alt="Ícone 4" />
          <img src="./science.png" alt="Ícone 5" />
          <img src="./unity2.png" alt="Ícone 1" />
          <img src="./c.png" alt="Ícone 1" />
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
