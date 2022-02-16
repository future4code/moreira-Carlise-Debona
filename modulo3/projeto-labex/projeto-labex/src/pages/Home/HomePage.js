import React from "react";
import { useNavigate} from "react-router-dom";

export default function HomePage(){
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

              <h3>Aventuras, mochilão Cultural gastronômica, 
                Passeio relaxante, ecoturismo e muita mais...
              </h3>
              
              <button onClick={() => goToListPage()}>Ver viagens</button>
               <button onClick={() => goToLoginPage()}>Área Adm</button>
               <p>os melhores pacotes de viagens você encontra aqui  na labex aproveite!</p>
               <div>

               </div>
              
          
    </div>
    


  );
}


