import React from 'react';
import styled from 'styled-components';


class CriarPlaylists extends React.Component {
  state = {
    lista: [
    {nome:""}

  ],
    valorInputNome: '',
};

  criarLista = () => { 
    const listaPlaylist = this.state.lista
    const novaListaPlaylist = [...this.state.lista, listaPlaylist];
    this.setState({lista: novaListaPlaylist, valorInputNome: '', })

  };

  onChangevalorInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
 
 
  render() {
    const listaDeMusica = this.state.lista.map((nome, index) => {

      return (
        <input key={index}
        nomeLista = {nome.nomeLista}
      /> 
      )
      });


    return (
      <div>
        <p>Crie sua Playlist com suas músicas favoritas!</p>
        <input 
          value= {this.state.valorInputNome}
          onChange= {this.onChangevalorInputNome}
          placeholder= {"Digite um nome"}
        />
        
        <button>Criar</button>
        <div>{listaDeMusica}</div>

      </div>
    )
  }
}
export default CriarPlaylists