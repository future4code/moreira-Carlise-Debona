import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Home, Img, ImgLogo, Button, DivInput, Input, Div, DivButton, DivLogo} from './styled';
import axios from 'axios';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {BASE_URL} from '../../constants/urls';

export default function Login() {
  //const [email, setEmail] = useState("");
  //const [senha, setSenha] = useState("");
  const navigate=useNavigate();

  const { form, onChange } = useForm({ email: "", password: "" })

  const onSubmitLogin = () => {
    const url = `${BASE_URL}/users/login`
    const headers = {"Content-Type":"application/json"}
    

    axios.post(url, form, headers)
    .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate("/feed")
    })
    .catch(error => {
        console.log(error.response);
        
    })
  }

 

  const goToRegister = () => {
    navigate("/cadastro")
  }

    return (
    <Home>
          <Div>
          <form onClick={onSubmitLogin}>
              <DivInput>
                <DivLogo>
                  <ImgLogo src="https://i.postimg.cc/D0VBZZ5T/Logo-Est-tica-6.png"/>
                  <h3 className="h3">Login</h3>
                </DivLogo>
                
                  <Input
                  name="email"
                  value={form.email}
                  placeholder="E-mail"
                  onChange={onChange}
                  type="email"
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                 
                  />
                  <Input
                  name="password"
                  value={form.password}
                  placeholder="Senha"
                  onChange={onChange}
                  type="password"
                  pattern={"\\w{8,}"}
                  title={"A senha deve conter no mínimo 8 caracteres"}
                 
                  />
              </DivInput>
              <DivButton>
                  <Button type="submit"> Entrar </Button> 
              </DivButton> 
              </form> 
              <p> Primeira vez no LabEddit? <Link to="/cadastro">CADASTRAR-SE</Link></p>
          </Div>
        </Home>
  );
}