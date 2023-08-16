import { useState } from "react";
import "./contato.css";

function Contato() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "lucascomaru20@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="container contato-section">
      <div className="content">
        <h1 className="text-center">Contato</h1>
        <p className="text-center">Transformando ideias em código de qualidade. Entre em contato e vamos dar vida aos seus projetos!</p>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="localizacao">
            <img src="./localizacao.png" alt="Localização" />
            <p>Fortaleza - Brasil</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="redes-sociais">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="./github.png" alt="GitHub" className="icone-social" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="./linkedin.png" alt="LinkedIn" className="icone-social" />
            </a>
            <a href="https://wa.me/5585991931477" target="_blank" rel="noopener noreferrer">
              <img src="./whatsapp.png" alt="WhatsApp" className="icone-social" />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="email-container">
            <div className="quadrado-email">
              <p className="email">lucascomaru20@gmail.com</p>
            </div>
            <div className="button-container"> 
              <button className={`btn ${copied ? "email-copiado" : ""}`} onClick={handleCopyEmail}>
                {copied ? "E-mail Copiado" : "Copiar E-mail"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
