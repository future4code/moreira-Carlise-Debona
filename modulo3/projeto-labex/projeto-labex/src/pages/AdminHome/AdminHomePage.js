import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, ButtonReset, Home, Img, DivListTrip, DivList, ContainerList, H3, ButtonBack, Nav, ButtonCreate, SocialNetworks, Button} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BiLogIn} from 'react-icons/bi';
import {MdOutlineAddLocationAlt} from 'react-icons/md';
import axios from "axios";
import {BsFillTrashFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function HomeAdm() {
  const [id, setTripId] = useState("")
  const [nameTrips, setTrips] = useState([]);

  

  const getTrips = ()=>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips`)
      .then((res) => {setTrips(res.data.trips);
        console.log(res)
      })
      .catch((err) => {console.log(err);

      })
  };

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips/${id}`
    const headers = { auth: localStorage.getItem("token")}
    axios
      .delete( url, {headers})
        .then((res) => {
          setTripId(res.data)
          alert("Removido")
          getTrips()
            console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
          alert("Erro, tente novamente")
        });
  }
    
  useEffect(() => {getTrips()}, []);

  const tripList = nameTrips.map((trip) =>{
    return (
    <DivList>
      <div key={trip.id}>
        <Link to="/adminTrips/:id"><strong>Nome: </strong>{trip.name}</Link>
        <ButtonReset onClick={()=>{deleteTrip(trip.id)}}><BsFillTrashFill color="black" fontSize="1.6em"/></ButtonReset>
      </div>
    </DivList>
    )
  });

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
            <ButtonBack onClick={() => goToHome()}>
              <BsFillArrowLeftCircleFill className="icon"/>
            </ButtonBack>
            
            <Img src="https://i.postimg.cc/ryJV083Z/Logo-Est-tica-5.png"/>
            <Div>
              <ButtonCreate onClick={() => goToCreateTrip()}><MdOutlineAddLocationAlt className="icone"/>Criar Viagem</ButtonCreate> 
              <div><Button onClick={() => goToLogin()}><BiLogIn className="icon"/>Logout</Button></div>     
            </Div>       
          </Nav>
        </header>

        <ContainerList>
          <H3>Lista de Viagens</H3>
          <DivListTrip>
          {tripList}
          </DivListTrip>
        </ContainerList>
                
              
              
        <Div>                
          <SocialNetworks>
            <FaFacebookF className="icons" />
            <BsInstagram className="icons" />
            <BsTwitter className="icons" />
            <BsYoutube className="icons" />
            </SocialNetworks>
        </Div>
              
      </Home>
    );
}



