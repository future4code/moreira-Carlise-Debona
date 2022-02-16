import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";




export default function Login() {
  const routes = useNavigate()

  const goToHomeAdm = () => {
    routes("/adminTripsList")
  }

  const goToHome = () => {
    routes("/")
  }

        return (
            <div>
              <p>Logo</p>

              <h3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </h3>
              <h3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </h3>
              <h3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </h3>
                
               <button onClick={() => goToHomeAdm()}>Entrar</button> 
               <button onClick={() => goToHome()}>Voltar</button>
               <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               <div>

               </div>
              
            </div>
        );
    }



