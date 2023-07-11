const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="#" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Início</button>
        <button className="navbar-button">Sobre</button>
        <button className="navbar-button">Educação</button>
        <button className="navbar-button">Projetos</button>
        <button className="navbar-button">Contato</button>
      </div>
    </nav>
  );
};

export default Navbar;
