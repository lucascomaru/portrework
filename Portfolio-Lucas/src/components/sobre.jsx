import './sobre.css'

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="texto text-justify">
        <h1 className='text-center'>Sobre Mim</h1>
        <p>
        <p>Meu nome é Lucas Santos Marques Comaru,
            tenho 26 anos, sou carioca e atualmente moro em Fortaleza.
            Sou formado em Gastronomia e trabalhei na área por alguns anos.
            No entanto, em março de 2022, decidi deixar a cozinha e comecei
            a explorar outras possibilidades para alcançar meus objetivos de vida.
            Foi nesse momento que descobri a programação e me apaixonei pela área.
        </p>
        
        <p>Neste momento, estou cursando o 2º período de Análise e Desenvolvimento de Sistemas na Universidade de Fortaleza (Unifor).</p>

        <p>Busco constantemente oportunidades para expandir meu conhecimento e desenvolver minhas habilidades,
           a fim de me tornar um profissional cada vez mais qualificado na área do desenvolvimento.</p>
        </p>
      </div>
      <div className="foto">
        <img src='./fotolucas.jpg' alt="Minha Foto" />
      </div>
    </div>
  );
};

export default Sobre;
