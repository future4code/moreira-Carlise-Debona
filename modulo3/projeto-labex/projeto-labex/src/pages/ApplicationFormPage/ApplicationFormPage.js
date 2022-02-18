import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Input, Home, Img, Button, ButtonVoltar, Nav, RedesSociais, DivImg, Foto, DivFrase} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import useForm from '../../hooks/useForm'
import { useState } from "react";
import useRequestData from '../../hooks/useRequestData';

export default function Form() {
  const [id, setTripId] = useState("");
  const [trips] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips", {})

  const onChangeTripId = (event) => {
    setTripId(event.target.value)
}

  const routes = useNavigate()

  const goToHome = () => {
    routes("/tripsList")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country:""
  });

  const cadastrar = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const OpcoesTrip = trips && trips.trips.map((nome)=>{
    return <option key={nome.id} value={nome.id}>{nome.name}</option>

  })

    return (
      <Home>
        <header>
          <Nav>
            <ButtonVoltar onClick={() => goToHome()}>
              <BsFillArrowLeftCircleFill className="icone"/>
            </ButtonVoltar>
              <Img src="https://i.postimg.cc/VvJfwHX8/Logo-Est-tica-4.png"/>
          </Nav>
        </header>
        <div>
          <h3>Inscreva-se para uma viagem</h3>
          <form onSubmit={cadastrar}>
            <select  
            defaultValue="" 
            onChange={onChangeTripId}>
              <option value="" disabled>Escolha uma viagem</option>
              {OpcoesTrip}
            </select>
            <Input
              name={"name"}
              value={form.name}
              placeholder="Nome"
              onChange={onChange}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 letras"}
            />
            <Input
              name={"age"}
              value={form.age}
              placeholder="Idade"
              onChange={onChange}
              type={"number"}
              min={18}
              required
            />
            <Input
              name={"applicationText"}
              value={form.applicationText}
              placeholder="Texto de Candidatura"
              onChange={onChange}
              pattern={"^.{30,}"}
              required
              title={"O texto deve ter no mínimo 30 caracteres"}
            />
            <Input
              name={"profession"}
              value={form.profession}
              placeholder="Profissão"
              onChange={onChange}
              pattern={"^.{10,}"}
              required
              title={"A profissão deve ter no mínimo 10 caracteres"}
            />
            <select
              name={"country"}
              value={form.country}
              placeholder="País"
              onChange={onChange}
              required
            >
          <option value={""} disabled>Escolha um País</option>

          </select>
          </form>
        </div>
        
        <Div>
          <DivFrase>
            <h3>Vem conosco e saiba tudo sobre como viver essa experiência incrível!</h3>
          </DivFrase>
          <DivImg>
            <Foto src="https://i.postimg.cc/DfMwGLpw/Hero-Content.png"/>
          </DivImg>
        </Div>        
               
               {/* <button onClick={() => goToCreateTrip()} >Entrar</button> */}
               
        <div>                
          <RedesSociais>
            <FaFacebookF className="icone" />
            <BsInstagram className="icone" />
            <BsTwitter className="icone" />
            <BsYoutube className="icone" />
          </RedesSociais>
        </div>
              
    </Home>
  );
}



