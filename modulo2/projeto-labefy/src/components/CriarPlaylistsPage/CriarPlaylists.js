import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "carlise-debona-moreira"
  }
};



const getAllPlaylists = () => {
  axios
    .get(urlPlaylist, headers)
    .then((response) => {
      console.log(response.data.result.list);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

class CriarPlaylists extends React.Component {
  state = {
    valorInputName:"",
    playlists: [],

};

componentDidMount() {
  this.getAllPlaylists();
}

getAllPlaylists = () => {
  axios
    .get(urlPlaylist, headers)
    .then((res) => {
      this.setState({ playlists: res.data.result.list });
    })
    .catch((err) => {
      alert("Algo deu errado, tente novamente!");
    });
};

  onChangeName = (event) => {
    this.setState({ valorInputName: event.target.value });
  };

  criarTituloDaPlaylist = ( ) => {
    const body = {
      name: this.state.valorInputName
    }
    axios
    .post(urlPlaylist, body, headers)
    .then((res) => {
      alert (`Playlist ${this.state.valorInputName} foi criada com sucesso!`);
      this.setState({valorInputName:""});
      this.getAllPlaylists();
    }) 
      .catch((err)=>{
        console.log(err.response)
        alert(err.response.data.message);
        this.setState({valorInputName:""});
      });
  };


 
  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });
     return (
      <div>
        <h1>Labefy</h1>
        <p>Crie sua Playlist com suas músicas favoritas!</p>
        
        <input 
          value= {this.state.valorInputName}
          onChange= {this.onChangeName}
          placeholder= {"Digite um nome"}
        />
        <button onClick={this.criarTituloDaPlaylist}>Criar</button>
        <p>Nome da Playlist: {this.state.valorInputName}</p>
        {playlistComponents}
      </div>
    )
  }
}
export default CriarPlaylists