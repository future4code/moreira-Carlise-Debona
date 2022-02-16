import React from 'react';
import { useNavigate} from "react-router-dom";

export default function TripDetails() {
  const routes = useNavigate()

  const goToListPage = () => {
    routes("/tripsList")
  }

  const goToLoginPage = () => {
    routes("/login")
  }

  return (
      <div>
        <p>Logo</p>

        <h3>Viagens</h3>
        <h3>Viagens</h3>
        <h3>Viagens</h3>
         <button>Ver Viagem</button> 
         <button>Área ADM</button>
         <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               
      </div>
  );
}
