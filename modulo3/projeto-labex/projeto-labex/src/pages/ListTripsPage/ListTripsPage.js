import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Home, Button, ButtonVoltar, Nav, RedesSociais} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';


export default function ListTrip() {
  const routes = useNavigate()

  const goToForm = () => {
    routes("/tripsApplication")
  }

  const goToHome = () => {
    routes("/")
  }

    return (
      <Home>
        <header>
          <Nav>
            <div>
              <p>Logo</p>
            </div>
              <ButtonVoltar onClick={() => goToHome()}>
                  <BsFillArrowLeftCircleFill className="icone"/>
              </ButtonVoltar> 
              <Button onClick={() => goToForm()}>Inscreva-se</Button>
          </Nav>
        </header>
        <div>
        <h3>Lista de Viagens</h3>
        </div>

        <Div>                
          <RedesSociais>
            <FaFacebookF className="icone" />
            <BsInstagram className="icone" />
            <BsTwitter className="icone" />
            <BsYoutube className="icone" />
            </RedesSociais>
        </Div>
      </Home>
  );
}



