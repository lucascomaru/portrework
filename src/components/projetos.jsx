import './projetos.css';
import { useState } from 'react';

const Projetos = () => {
  const projects = [
    {
      name: 'Hackathon',
      description: 'Desenvolvi um sistema de gestão de presença para treinamentos na M. Dias Branco, automatizando o registro de funcionários e a geração de listas em Excel para o RH.',
      website: 'https://github.com/lucascomaru/hackataon',
      image: '/hackaton.png',
      techs: 'React, JavaScript, HTML',
    }
    ,
    {
      name: 'DjangoFlix',
      description: 'O projeto é uma criação de uma plataforma de streaming de trailers de filmes e séries, semelhante ao Netflix, desenvolvida utilizando o framework Django. Ele permite aos usuários explorarem e assistirem trailers de diferentes conteúdos.',
      website: 'https://github.com/lucascomaru/djangoflix',
      image: '/Djangoflixof.png',
      techs: 'Python,HTML,CSS',
    }
    ,
    {
      name: 'Astrorm Space',
      description: 'Desenvolvi um jogo de nave espacial disponível na Play Store, onde o jogador controla uma nave que enfrenta inimigos em queda, eliminando-os enquanto evita obstáculos.',
      website: 'https://github.com/lucascomaru/sshooterunity',
      image: '/ogame.jpg',
      techs: 'React, HTML, CSS',
    },
    
  ];

  const [projectDetails, setProjectDetails] = useState(null);

  const handleMouseOver = (project) => {
    setProjectDetails(project);
  };

  const handleMouseLeave = () => {
    setProjectDetails(null);
  };

  const handleClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <section id="projetos" className="projetos-section">
      <div className="container">
        <h1 className="titulo-projetos">PROJETOS</h1>
        <p>Uma seleção dos meus projetos práticos favoritos! 😃</p>
        <div className="projetos-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="projeto"
              onMouseOver={() => handleMouseOver(project)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(project.website)}
            >
              <img src={project.image} alt={project.name} />
              <div className="projeto-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {projectDetails === project && <p className="techs">{project.techs}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
