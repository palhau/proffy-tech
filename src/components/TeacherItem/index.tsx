import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/31283687?s=460&u=cbe1bf2a19432573998c56ca729cda996183e57a&v=4"
          alt="Patrick Vieira Feitosa"
        />
        <div>
          <strong>Patrick Feitosa</strong>
          <span>React</span>
        </div>
      </header>

      <p>
        O React é uma biblioteca JavaScript de código aberto com foco em criar
        interfaces de usuário em páginas web.
        <br></br>É mantido pelo Facebook,Instagram, outras empresas e uma
        comunidade de desenvolvedores individuais. É utilizado nos sites da
        Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros
      </p>

      <footer>
        <p>
          Preco/Hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entre em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
