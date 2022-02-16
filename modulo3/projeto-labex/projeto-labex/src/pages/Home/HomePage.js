import React from "react";
import { useNavigate} from "react-router-dom";
import {H3, Div, DivP, Home, DivButton, Button, RedesSociais} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'



export default function HomePage(){
  const routes = useNavigate()

  const goToListPage = () => {
    routes("/tripsList")
  }

  const goToLoginPage = () => {
    routes("/login")
  }

  return (

    <Home>
      
              <p>Logo</p>

              <H3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </H3>
              <DivButton>
                <Button onClick={() => goToListPage()}>Ver viagens</Button>
                <Button onClick={() => goToLoginPage()}>Área Adm</Button>
              </DivButton>
              <DivP>
                <p>Os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
              </DivP>
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


