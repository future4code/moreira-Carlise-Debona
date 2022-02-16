import React from 'react';
import { useNavigate} from "react-router-dom";

export default function TripDetails() {
  const routes = useNavigate()

  const goToHomeAdm = () => {
    routes("/adminTripsList")
  }

  const goToLogin = () => {
    routes("/login")
  }

  const goToHome = () => {
    routes("/")
  }

  return (
      <div>
        <p>Logo</p>

        <h3>Viagens</h3>
        <h3>Viagens</h3>
        <h3>Viagens</h3>
         <button onClick={() =>goToHomeAdm()}>Voltar</button> 
         <button onClick={() =>goToLogin()}>Logout</button>
         <button onClick={() =>goToHome()}>Home</button>
         <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               
      </div>
  );
}
