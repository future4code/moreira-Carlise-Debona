import React from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Img, ButtonBack, Nav, Button} from './styled';
import {BiLogIn} from 'react-icons/bi';
import {IoIosArrowDropleftCircle} from 'react-icons/io';




export default function HomeAdm() {

  const routes = useNavigate()

  const goToHomeFeed = () => {
    routes("/feed/:id")
  }

  const goToLogin = () => {
    routes("/")
  }


    return (
          <Nav>
            <Img src="https://i.postimg.cc/Hs57M3nz/Logo-Est-tica-3.png"/>

            <div>
              <ButtonBack onClick={() => goToHomeFeed()}>
                <IoIosArrowDropleftCircle className="icon"/>Voltar
              </ButtonBack>
            </div> 

            <Div>
              <div><Button onClick={() => goToLogin()}><BiLogIn className="icon"/>Logout</Button></div>     
            </Div>       
          </Nav>
    );
}



