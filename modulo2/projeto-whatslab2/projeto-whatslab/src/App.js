import React from "react";
import styled from 'styled-components'


const ContainerMensagem = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const BoxMensagem = styled.div`
 flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`
const ContainerDivInput = styled.div`
   display: flex;
   
`

const UsuarioInput = styled.input`
  width: 100px;
  
`

const MensagemInput = styled.input`
  flex: 1;
`

const Button = styled.button`
  padding: 5px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;


`


class ContainerBody extends React.Component{

  state = {
  
      textoMensagem:[],
      valorInputUsuario:"",
      valorInputMensagem:""
    }

    enviarMensagem = () => {
     
      const novaMensagem = {
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem
      };

      const novasMensagens = [...this.state.textoMensagem, novaMensagem];
      this.setState({ textoMensagem: novasMensagens,
        valorInputUsuario: "",
        valorInputMensagem: "", 
     });
    };
  
    onChangeInputUsuario = (event) => {
      this.setState({ valorInputUsuario: event.target.value });
    };
  
    onChangeInputMensagem = (event) => {
      this.setState({ valorInputMensagem: event.target.value });
    };
  
  render () {
  
    const listaDeMensagem = this.state.textoMensagem.map((pessoa) => {
      return (
        <span>
          <strong>{pessoa.usuario}</strong> {pessoa.mensagem} 
        </span>
      );
    });
  
    return (
      <ContainerMensagem>
          <BoxMensagem>{listaDeMensagem}</BoxMensagem>

          <ContainerDivInput>	
            <UsuarioInput
              type="text"
              value={this.state.valorInputUsuario}  
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
              name={"Usuário"}
            />
            <MensagemInput
              type="text"
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
              name={"Mensagem"}
            />
            <Button onClick={this.enviarMensagem}>Enviar</Button>
          </ContainerDivInput>
          
      </ContainerMensagem>
      )
    }
  }
  export default ContainerBody 

