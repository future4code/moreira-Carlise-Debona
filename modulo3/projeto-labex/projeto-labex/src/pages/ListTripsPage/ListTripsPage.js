import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Home, Img, Button, ButtonVoltar, Nav, RedesSociais} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import axios from "axios";

export default function ListTrip() {

  const [nameTrips, setTrips] = useState([]);

  useEffect(() => {getTrips()}, []);

  const getTrips = ()=>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips`)
      .then((res) => {setTrips(res.data.trips);
        console.log(res)
      })
      .catch((err) => {console.log(err);

      })
  };

  const listaDeViagem = nameTrips.map((trip) =>{
    return <div className="cardLista" key={trip.id}>
      <p><strong>Nome:</strong>{trip.name}</p>
      <p><strong>Descrição:</strong>{trip.description}</p>
      <p><strong>Planeta:</strong>{trip.planet}</p>
      <p><strong>Duração:</strong>{trip.durationInDays}</p>
      <p><strong>Data:</strong>{trip.date}</p>
  </div>
  });

  const routes = useNavigate()

  const goToForm = () => {
    routes("/tripsApplication")
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
              <Img src="https://i.postimg.cc/VvJfwHX8/Logo-Est-tica-4.png"/>
            <Button onClick={() => goToForm()}>Inscreva-se</Button>
          </Nav>
        </header>
        <h3>Lista de Viagens</h3>
        <div>{listaDeViagem}</div>

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



