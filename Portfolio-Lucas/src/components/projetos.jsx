import './projetos.css';
import { useState } from 'react';

const Projetos = () => {
  const projects = [
    {
      name: 'DjangoFlix',
      description: 'O projeto é uma criação de uma plataforma de streaming de trailers de filmes e séries, semelhante ao Netflix, desenvolvida utilizando o framework Django. Ele permite aos usuários explorarem e assistirem trailers de diferentes conteúdos.',
      website: 'https://djangoflixbr.herokuapp.com/',
      image: '/Djangoflixof.png',
      techs: 'Python,HTML,CSS',
    },
    {
      name: 'Quebra Cabeças',
      description: 'Desenvolvi um jogo de quebra-cabeças com temática de animes usando React.',
      website: 'https://piecegame-gepqeiawe-lucascomaru.vercel.app/',
      image: '/rsz_2animes.png',
      techs: 'React, JavaScript, HTML',
    },
    {
      name: 'Secret Word',
      description: 'O projeto é um jogo de adivinhação onde os jogadores chutam letras para adivinhar uma palavra. Se eles acertarem, eles acumulam pontos.',
      website: 'https://secretword-mu.vercel.app/',
      image: '/rsz_secretwooord.png',
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
