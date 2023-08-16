import "./servicos.css";

const Servicos = () => {
  return (
    <div className="servicos-container">
      <h1 className="titulo-serv">Serviços</h1> 
      <div className="habilidade">
        <img src="./joystick.png" alt="UI/UX" height="80px" width="80px" />
        <h2>Desenvolvimento de jogos Unity</h2>
        <p>
        Criação de jogos interativos e envolventes usando a Unity,<p>incluindo design, programação, física e integração de assets.</p>
        </p>
      </div>
      <div className="habilidade">
        <img src="./3d-printer.png" alt="Desenvolvimento" height="80px" width="80px" />
        <h2>Desenvolvimento de jogos 2D e 3D</h2>
        <p>
        Criação de jogos tridimensionais (3D) envolventes com gráficos<p> e mecânicas de gameplay inovadoras.</p>  
        </p>
      </div>
      <div className="habilidade">
        <img src="./adobe.png" alt="Ícone de Frontend" height="80px" width="80px" />
        <h2>Edição de Imagens no Photoshop</h2>
        <p>
          Habilidades avançadas em edição de imagens usando o Photoshop,<p>, para aprimorar a qualidade visual de projetos e recursos.</p>
        </p>
      </div>
    </div>
  );
};

export default Servicos;
