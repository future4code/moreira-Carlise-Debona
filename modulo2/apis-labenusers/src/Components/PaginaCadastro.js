import React from "react";
import axios from "axios";



export default class Cadastro extends React.Component {

  state = {
    
    name: "",
    email: ""
    
  };

  createUserName = event => {
    const novoCadastroName = event.target.value;

    this.setState({ name: novoCadastroName });
  };

  createUserEmail = event => {
    const novoCastroEmail = event.target.value;

    this.setState({ email: novoCastroEmail });
  };

  createUser = () => {
    const axiosConfig = {
      headers: {
      Authorization: carlise-debona-moreira
      }
    };

    const body = 
    {
      name: this.state.name,
      email: this.state.email
    };

    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} Acesso criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        alert("Erro tente novamente!");
        console.log(error);
      });
  };

  Render() {
    return (

    <div>
      <h1>Castrar Usuário</h1>
      <input>
        placeholder="Digite seu nome completo"
        type="text"
        value={this.state.name}
        onChange={this.createUserName}
      </input>
      
      <input
        placeholder="E-mail"
        type="email"
        value={this.state.email}
        onChange={this.createUserEmail}
          />

      <button onClick={this.}>Adicionar</button>
    </div>

  )};
}