import "./servicos.css";

const Servicos = () => {
  return (
    <div className="servicos-container">
      <h1 className="titulo-serv">Serviços</h1> 
      <div className="habilidade">
        <img src="./design.png" alt="UI/UX" height="80px" width="80px" />
        <h2>UI - UX</h2>
        <p>
          Crio interfaces intuitivas e impactantes, garantindo uma experiência clara e objetiva para os usuários.
        </p>
      </div>
      <div className="habilidade">
        <img src="desenvolvimento.png" alt="Desenvolvimento" height="80px" width="80px" />
        <h2>Desenvolvimento</h2>
        <p>
          Desenvolvo sites profissionais, blogs, portfólios, aplicativos, landing pages e e-commerce.
        </p>
      </div>
      <div className="habilidade">
        <img src="./monitor.png" alt="Ícone de Frontend" height="80px" width="80px" />
        <h2>Frontend</h2>
        <p>
          Com habilidades em HTML, CSS, JavaScript e frameworks front-end, posso projetar e desenvolver interfaces intuitivas, otimizadas e atraentes.
        </p>
      </div>
    </div>
  );
};

export default Servicos;
