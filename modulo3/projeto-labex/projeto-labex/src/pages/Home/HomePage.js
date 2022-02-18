import React from "react";
import { useNavigate} from "react-router-dom";
import {H3, Div, Img, DivP, Home, DivButton, Button, RedesSociais} from './styled';
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
      
      <Img src="https://i.postimg.cc/VvJfwHX8/Logo-Est-tica-4.png"/>

              <H3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </H3>
              <DivButton>
                <Button onClick={() => goToListPage()}>Ver viagens</Button>
                <Button onClick={() => goToLoginPage()}>Área Adm</Button>
              </DivButton>
              <DivP>
                <p>Os melhores pacotes de viagens você encontra aqui  na Labex aproveite!</p>
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


