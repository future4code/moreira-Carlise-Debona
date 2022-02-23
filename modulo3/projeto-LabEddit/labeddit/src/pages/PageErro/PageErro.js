import React from "react";
import { ButtonBack, Home } from "../PageRegister/styled";
import{useNavigate} from 'react-router-dom';

export default function Erro(){

  const navigate= useNavigate();
  const goToHome = () => {
    navigate("/login")
  }


  return (
    <Home>
    <ButtonBack onClick={()=>goToHome(navigate)}> Voltar </ButtonBack>

      

    </Home>
  )

}