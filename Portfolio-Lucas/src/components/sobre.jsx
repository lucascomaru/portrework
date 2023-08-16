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

        <p>Desde criança, sempre fui um entusiasta dos jogos, passando horas imerso em diferentes mundos virtuais. Esse amor pelo universo dos jogos, cultivado desde a infância, acabou se tornando uma parte inseparável de quem eu sou. Ao ingressar na área de desenvolvimento, inicialmente direcionado para a web, logo percebi que minha verdadeira paixão residia na programação de jogos.</p>
        <p>A cada dia, busco incansavelmente por oportunidades que me permitam ampliar meu conhecimento e aprimorar minhas habilidades. Meu objetivo é me tornar um profissional altamente qualificado na área de desenvolvimento, especialmente focado na criação de jogos. Acredito que minha dedicação, combinada com a paixão que tenho cultivado desde a infância, me guiará nessa jornada emocionante e desafiadora.</p>
        </p>
      </div>
      <div className="foto">
        <img src='./foto2.jpg' alt="Minha Foto" />
      </div>
    </div>
  );
};

export default Sobre;
