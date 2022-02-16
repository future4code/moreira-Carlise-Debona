import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';



export default function Form() {
    const[listaTrip, setListaTrip] = useState([]);

    



  const routes = useNavigate()

  const goToAplication = () => {
    routes("/tripsList")
  }

  const goToHome = () => {
    routes("/tripsList")
  }

        return (
            <div>
              <p>Logo</p>

              <h3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </h3>
                
               <button onClick={() => goToHome()} >Voltar</button> 
               {/* <button onClick={() => goToCreateTrip()} >Entrar</button> */}
               <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               <div>

               </div>
              
            </div>
        );
    }



