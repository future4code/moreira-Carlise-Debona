import React from "react";
import axios from "axios";



export default class Cadastro extends React.Component {

  state = {
    
    name: "",
    email: ""
    
  };

  createUser = () => {
    const axiosConfig = {
      headers: {
      Authorization: carlise-debona-moreira
      }
    };

  createUserName = event => {
    const novoCadastroName = event.target.value;

    this.setState({ name: novoCadastroName });
  };

  createUserEmail = event => {
    const novoCastroEmail = event.target.value;

    this.setState({ email: novoCastroEmail });
  };

  

    const body = 
    {
      name: this.state.name,
      email: this.state.email
    };

    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,axiosConfig)

      .then(() => {
        alert(`Usuário ${this.state.name} Acesso criado com sucesso!`);
        this.setState({ 
          name: "", 
          email: "" });
      })


      .catch(erro => {
        alert("Erro tente novamente!");
        console.log(erro);
      });
  };

  Render() {
    return (

    <div>
      <h1>Castrar Usuário</h1>
      <input
        placeholder="Digite seu nome completo"
        type="text"
        value={this.state.name}
        onChange={this.createUserName}
      />
      
      <input
        placeholder="E-mail"
        type="email"
        value={this.state.email}
        onChange={this.createUserEmail}
      />

      <button onClick={this.createUser}>Adicionar</button>
      <button onClick={this.props.irLista}>Voltar para Lista de Castro</button>
    </div>

  )};
}