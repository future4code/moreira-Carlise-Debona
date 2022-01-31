import React from 'react';
import styled from 'styled-components';

class CriarPlaylists extends React.Component {
  state = {
 
    valorInputNome:""

  };

  onChangevalorInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onClickCriar = ( ) => {
    console.log("nome", this.state.valorInputNome)
    this.setState({valorInputNome: ""})
  }
 
  render() {
    
   return (
      <div>
        <p>Crie sua Playlist com suas músicas favoritas!</p>
        <input 
          value= {this.state.valorInputNome}
          onChange= {this.onChangevalorInputNome}
          placeholder= {"Digite um nome"}
        />
        <button onClick={this.onClickCriar}>Criar</button>
        <p>Nome: {this.state.valorInputNome}</p>
      </div>
    )
  }
}
export default CriarPlaylists