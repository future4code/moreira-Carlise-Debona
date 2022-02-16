import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";






export default function HomeAdm() {
  const routes = useNavigate()

  const goToLogin = () => {
    routes("/login")
  }

  const goToCreateTrip = () => {
    routes("adminTripsCreate")
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
                
               <button onClick={() => goToCreateTrip()}>Criar Viagem</button> 
               <button onClick={() => goToLogin()}>Logout</button>
               <button onClick={() => goToHome()}>Voltar</button>
               <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               <div>

               </div>
              
            </div>
        );
    }



