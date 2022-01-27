import React from "react";
import axios from "axios";
import styled from 'styled-components';


const headers = {
    headers: {
    Authorization: "carlise-debona-moreira"}
};


const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";


class PaginaLista extends React.Component{

    state = {
        Usuarios: []
    } 
    componentDidMount() {
        this.getAllUsers()
      }

      getAllUsers = () => {
        axios
        .get(url, headers)
        .then((resposta) =>{this.setState({Usuarios: resposta.data})})
        .catch(() => {alert(`Erro tente novamente!`)})

      }
    render(){
        const listaDePessoas = this.state.Usuarios.map((pessoa) => {
                return (
                <div key={pessoa.id}>
                    {pessoa.name}
                    <button> Fechar </button>
                </div>
                )
              })
        return(
            <div>
                <button onClick={this.props.Cadastro}>Voltar para Cadastro</button>
                <h1>Lista de Cadastrados</h1>
                {listaDePessoas}

            </div>
        );
    }
}

export default PaginaLista




