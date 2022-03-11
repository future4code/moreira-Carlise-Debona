import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import {Div, DivS, ContainerDetails, ButtonReset, Home, PName, Img, DivListTrip,DivName, DivList, ContainerList, H3, ButtonBack, Nav, ButtonCreate, SocialNetworks, ButtonLogout} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube, BsWhatsapp, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import axios from "axios";
import {BiLogIn} from 'react-icons/bi'
import {FaUserPlus} from 'react-icons/fa';
import {BsFillPersonXFill} from 'react-icons/bs';


export default function TripDetailsPage() {
  const [ id, setId ] = useState(localStorage.getItem('id'));
    const [candidateTrip, setCandidateTrip] = useState([])
    const [approvedCandidate, setApproved] = useState([])
    const [ tripDetails, setTripDetails ] = useState({});
    
    
    
    useEffect(() => {getCandidate()}, []);
  
    const getCandidate = ()=>{
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trip/${id}`
        const headers = { auth: localStorage.getItem("token")}
      axios.get(url, {headers})
      .then((res)=>{
        setTripDetails(res.data.trip);
        setCandidateTrip(res.data.candidates)
        setApproved(res.data.approved)
        console.log(res.data)
      })
      .catch((err)=>{console.log(err.data)});
    }
      const putApprovedCandidate =(candidateId)=> {
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips/:${id}/candidates/:${candidateId}/decide`
        const headers = { auth: localStorage.getItem("token")}
        const body = {"approve": true}
      axios.put(url, body, {headers})
      .then((res)=>{
        alert("Cadiato Aprovado")
        getCandidate()
        console.log(res.data)
      })
      .catch((err)=>{
        alert("Erro, candidato reprovado tente novamente!")
        console.log(err.res)});
      };
  
      const putDisaPproveCandidate =(disaPproveCandidateId)=> {
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips/:${id}/candidates/:${disaPproveCandidateId}/decide`
        const headers = { auth: localStorage.getItem("token")}
        const body = {"approve": false}
      axios.put(url, body, {headers})
      .then((res)=>{
        alert("Cadiato Reprovado")
        getCandidate()
        console.log(res.data)
      })
      .catch((err)=>{
        alert("Erro, candidato reprovado tente novamente!")
        console.log(err.res)});
      };

      const routes = useNavigate();

      const goToHomeAdm = () => {
         routes("/adminTripsList")
      };

      const goToLogin = () => {
        routes("/login")
      };
      

    return (
      <Home>
         <header>
          <Nav>
            <ButtonBack onClick={() => goToHomeAdm()}>
              <BsFillArrowLeftCircleFill className="icon"/>
            </ButtonBack>
            <Img src="https://i.postimg.cc/FHsyZcBR/Logo-Est-tica-5.png"/>
            <div>
              <div><ButtonLogout onClick={() => goToLogin()}>
                <BiLogIn className="icon"/>Logout</ButtonLogout>
              </div>     
            </div>       
          </Nav>
        </header>

        <ContainerDetails>
        <ContainerList>
            <H3>Lista de Viagem</H3>
              <DivListTrip>
                <DivList >
                  <p><strong>Nome: </strong>{tripDetails.name}</p>
                  <p><strong>Descrição: </strong>{tripDetails.description}</p>
                  <p><strong>Planeta: </strong>{tripDetails.planet}</p>
                  <p><strong>Duração: </strong>{tripDetails.durationInDays}</p>
                  <p><strong>Data: </strong>{tripDetails.date}</p>
                </DivList>
              </DivListTrip>
          </ContainerList>

          <ContainerList>
            <H3>Lista de candidatos Aprovados</H3>
              <DivListTrip>
              {approvedCandidate && approvedCandidate.length > 0 ? approvedCandidate.map((item) => {
                return <DivList key={item.id}>
                    <p><strong>Nome: </strong>{item.name}</p>
                    </DivList>}) : <p>Não consta nenhum candidato</p>}
              </DivListTrip>
            </ContainerList>

            <ContainerList>
            <H3>Lista de candidatos Pendentes</H3>
              <DivListTrip>
                  {candidateTrip && candidateTrip.length > 0 ? candidateTrip.map((candidate) => {
                    return <DivList key={candidate.id}>
                      <p><strong>Nome: </strong>{candidate.name}</p>
                      <p><strong>Descrição: </strong>{candidate.applicationText}</p>
                      <p><strong>Profissão: </strong>{candidate.profession}</p>
                      <p><strong>Idade: </strong>{candidate.age}</p>
                      <p><strong>País: </strong>{candidate.country}</p>
                    <ButtonReset onClick={()=>{putApprovedCandidate(candidate.id)}}><FaUserPlus color="black" fontSize="1.6em"/></ButtonReset>
                    <ButtonReset onClick={()=>{putDisaPproveCandidate(candidate.id)}}><BsFillPersonXFill color="black" fontSize="1.6em"/></ButtonReset>             
                </DivList>}) : <p>Não consta nenhum candidato</p>}
              </DivListTrip>
        </ContainerList>
        </ContainerDetails>
        

        <DivS>                
          <SocialNetworks>
            <BsWhatsapp className="icons"/>
            <FaFacebookF className="icons" />
            <BsInstagram className="icons" />
            <BsTwitter className="icons" />
            <BsYoutube className="icons" />
            </SocialNetworks>
        </DivS>
    </Home>
    );
}

