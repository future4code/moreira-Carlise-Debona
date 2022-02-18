import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Home, Img, Button, ButtonVoltar, Nav, ButtonCriar, RedesSociais} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BiLogIn} from 'react-icons/bi';
import {MdOutlineAddLocationAlt} from 'react-icons/md';


export default function HomeAdm() {
  const routes = useNavigate()

  const goToLogin = () => {
    routes("/login")
  }

  const goToCreateTrip = () => {
    routes("/adminTripsCreate")
  }

  const goToHome = () => {
    routes("/")
  }

    return (
      <Home>
        <header>
          <Nav>
            <ButtonVoltar onClick={() => goToHome()}>
              <BsFillArrowLeftCircleFill className="icone"/>
            </ButtonVoltar>
            
            <Img src="https://i.postimg.cc/ryJV083Z/Logo-Est-tica-5.png"/>
            <Div>
              <div><Button onClick={() => goToLogin()}><BiLogIn className="icone"/>Logout</Button></div>     
            </Div>       
          </Nav>
        </header>
                
              
              
        <Div>                
          <RedesSociais>
            <FaFacebookF className="icone" />
            <BsInstagram className="icone" />
            <BsTwitter className="icone" />
            <BsYoutube className="icone" />
            </RedesSociais>
        </Div>
              
      </Home>
    );
}



