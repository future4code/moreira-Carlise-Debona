
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Img, P, AreaFooter, Botao, Idade, Perfil, Fundo} from './styled';
import {BiHeartCircle} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function  GetPerfil() {
  const [profile, setProfile] = useState([]);
   const [match, setMatch] = useState(false);

      useEffect(() => {getProfile()}, []);

      const getProfile = () => {
          axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:carlise/person`)
          .then((res) => {setProfile(res.data.profile);
          })
          .catch((err) => {console.log(err);
          });
      };

      const chooseProfileLike = () => {
          const body = { id: profile.id, 
                        choice: true };
          axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:carlise/choose-person",
                    body)
          .then((res) => {alert("Deu Match!");
              setMatch(res.data);
              getProfile();
          })
          .catch((err) => {console.log(err);
              alert("Erro, tente novamente!");
          });
      };
      return(
        <Fundo>
              <Img src={profile.photo} alt="Foto do Perfil"/>
              <P>{profile.name}, {profile.age} </P>
              <Perfil>{profile.bio}</Perfil>
             
              
              
          <AreaFooter>
              <Botao onClick={()=> getProfile()}> 
                <AiOutlineCloseCircle color="#DC143C" fontSize="3em"/>
              </Botao>
              <Botao onClick={()=> chooseProfileLike()}>
                <BiHeartCircle color="#DC143C" fontSize="3em"/>
              </Botao>
          </AreaFooter>
        </Fundo>
      );
}
