import React from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Img, ButtonBack, Nav, ButtonCreate, Button} from './styled';
import {BiLogIn} from 'react-icons/bi';
import {MdOutlineAddLocationAlt} from 'react-icons/md';





export default function HomeAdm() {

  const routes = useNavigate()

  const goToLogin = () => {
    routes("/")
  }

  const goToCreateTrip = () => {
    routes("/comentarios/:id")
  }



    return (
          <Nav>
            <Img src="https://i.postimg.cc/Hs57M3nz/Logo-Est-tica-3.png"/>
            <Div>
              <ButtonCreate onClick={() => goToCreateTrip()}><MdOutlineAddLocationAlt className="icone"/>Adicionar Post</ButtonCreate> 
              <div><Button onClick={() => goToLogin()}><BiLogIn className="icon"/>Logout</Button></div>     
            </Div>       
          </Nav>
    );
}



