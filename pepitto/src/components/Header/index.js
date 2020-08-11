import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navegacao from '../Navegacao';
import './style.css';

const Header = () => {
    return(
    <header>
        <div className="header">
          <div className="logo">
              <p>PEPI<span>TTO</span></p>
          </div>
          <div className="redes-sociais">
            <div className="telefone">
                <FontAwesomeIcon icon={faPhoneAlt} className="icon"/>
                <p>+1 11 92919121</p>
            </div>
            <div className="localizacao">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
              <p>3434 Visteria Lane 343</p>
            </div>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
              <p>ppetem@contato.com.br</p>
            </div>
          </div>
        </div>
        <Navegacao/>
      </header>
    )
}

export default Header;