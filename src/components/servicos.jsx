import "./servicos.css";

const Servicos = () => {
  return (
    <div className="servicos-container">
      <h1 className="titulo-serv">Serviços</h1>       
      <div className="habilidade">
        <img src="./analise.png" alt="Desenvolvimento" height="80px" width="80px" />
        <h2>Análise de Dados</h2>
        <p>
        Transformação de dados brutos em insights valiosos utilizando Python, Power BI e <p> Pandas para tomada de decisões estratégicas.</p>  
        </p>
      </div>
      <div className="habilidade">
        <img src="./program.png" alt="Ícone de Frontend" height="80px" width="80px" />
        <h2>Programação Web</h2>
        <p>
          Desenvolvimento de aplicações web dinâmicas e responsivas com JavaScript e React<p>, garantindo performance e ótima experiência do usuário.</p>
        </p>
      </div>
      <div className="habilidade">
        <img src="./joystick.png" alt="UI/UX" height="80px" width="80px" />
        <h2>Desenvolvimento de jogos Unity</h2>
        <p>
        Criação de jogos interativos e envolventes usando a Unity,<p>incluindo design, programação, física e integração de assets.</p>
        </p>
      </div>
    </div>
  );
};

export default Servicos;
