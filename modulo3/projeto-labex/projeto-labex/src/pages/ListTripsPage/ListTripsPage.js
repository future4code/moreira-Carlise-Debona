import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";




export default function ListTrip() {
  const routes = useNavigate()

  const goToHomeAdm = () => {
    routes("/adminTripsList")
  }

  const goToLoginPage = () => {
    routes("/login")
  }

        return (
            <div>
              <p>Logo</p>
              <p>Logo</p>
              <p>Logo</p>

              <h3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </h3>
                
               <button>Ver Viagem</button> 
               <button>Área ADM</button>
               <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               <div>

               </div>
              
            </div>
        );
    }



