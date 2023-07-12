import './projetos.css'
import { useState } from 'react';

const Projetos = () => {
  const projects = [
    {
      name: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      website: 'https://projeto1.com',
      image: '/2396.jpg',
    },
    {
      name: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      website: 'https://projeto2.com',
      image: '/projeto2.jpg',
    },
    {
      name: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      website: 'https://projeto3.com',
      image: '/projeto3.jpg',
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
    <section id="projetos" className="section projetos-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <h1>PROJETOS</h1>
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
              {projectDetails === project && (
                <div className="projeto-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
