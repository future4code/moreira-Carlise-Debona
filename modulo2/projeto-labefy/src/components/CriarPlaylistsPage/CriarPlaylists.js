import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const headers = {
  headers: {
    Authorization: "carlise-debona-moreira"
  }
};

class CriarPlaylists extends React.Component {
  state = {
    valorInputName:"",
    playlists: [],
    playlistId: "",

    musicas: [],
    valorInputArtista: "",
    valorInputUrl: "",
    valorInpitNameMusic: ""
};

  componentDidMount() {
    this.getAllPlaylists();
  }

  criarTituloDaPlaylist = ( ) => {
    const urlPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
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

  excluirPlaylist = (id) => {
    const urlDeletar = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios
    .delete(urlDeletar, headers)
    .then(resp => {
      alert("Playlist excluída com sucesso!")
      this.getAllPlaylists()
    })
    .catch(err => {
      alert("Erro, tente novamente!")
    })
  }

  getAllPlaylists = () => { 
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente!");
      });
  };

  addMusicaNaPlaylist = (id) => {
    const urlAdiconarMusica = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const body = {
      name: this.state.valorInpitNameMusic,
      artist: this.state.valorInputArtista,
      url: this.state.valorInputUrl
    }
    axios
    .post(urlAdiconarMusica, body, headers)
    .then((res) => {
      alert (`Música ${this.state.valorInpitNameMusic} adicionada com sucesso!`);
      this.setState({valorInpitNameMusic:"", valorInputArtista:"", valorInputUrl:""});
      this.getMusicasDaPlaylist();
    }) 
      .catch((err)=>{
        console.log(err.response)
        alert(err.response.data);
        this.setState({valorInpitNameMusic:"", valorInputArtista:"", valorInputUrl:""});
      });
  };
  
  getMusicasDaPlaylist = (id) => { 
    const getPlaylistTracks = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios
      .get(getPlaylistTracks, headers)
      .then((res) => {
        this.setState({playlistId: id})
        this.setState({ musicas: res.data.result.tracks});
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente!");
      });
  };

  excluirMusicaDaPlaylist = (id) => {
    const urlExcluirMusica =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks/${id}`
    axios
    .delete(urlExcluirMusica, headers)
    .then(resp => {
      alert("Música excluída com sucesso!")
      this.getMusicasDaPlaylist()
    })
    .catch(err => {
      alert("Algo deu errado, tente novamente!")
    })
  }

  onChangeValorInpitNameMusic = (event) => {
    this.setState({valorInpitNameMusic: event.target.value})
  }

  onChangeValorInputArtista = (event) => {
    this.setState({valorInputArtista: event.target.value})
  }

  onChangeValorInputUrl = (event) => {
      this.setState({valorInputUrl: event.target.value})
  }

  onChangeName = (event) => {
    this.setState({ valorInputName: event.target.value });
  };
 
  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return 
        <div key={play.id}>
          <p onClick={() =>this.getMusicasDaPlaylist(play.id)}>{play.name} 
          <button onClick={() => this.excluirPlaylist(play.id)}>Excluir</button>
          </p>
        </div>
      
    })

    const MusicasDaPlaylist = this.state.playlists.map((play) => {
        return <div key={play.id}>
            {/* <ReactPlayer
                url={item.url}
                playing={false}
                controls={true}
                width={400}
                height={272}
            /> */}
            <p>{play.artist} - {play.name} 
            <button onClick={() => this.excluirMusicaDaPlaylist(play.id)}>Excluir</button>
            </p>
            
        </div>
    })

     return (
      <div>

        <div>
          <h1>Labefy</h1>
          <p>Crie sua Playlist com suas músicas favoritas!</p>
          <input 
            value= {this.state.valorInputName}
            onChange= {this.onChangeName}
            placeholder= {"Digite um nome"}
          />
          <button onClick={this.criarTituloDaPlaylist}>Criar</button>
        </div>

        <div>
          <p>Nome da Playlist: {this.state.valorInputName}</p>
        </div>
        <div>
          <h1>Sua lista:</h1>  
          {playlistComponents}
        </div>

        <div>
          <h1>Adiconar músicas:</h1> 
          <input 
            value= {this.state.valorInputArtista}
            onChange= {this.onChangeValorInputArtista}
            placeholder= {"Artista"}
          />
          <input 
            value= {this.state.valorInpitNameMusic}
            onChange= {this.onChangeValorInpitNameMusic}
            placeholder= {"Nome da música"}
          />
          <input 
            value= {this.state.valorInputUrl}
            onChange= {this.onChangeValorInputUrl}
            placeholder= {"URL"}
          />
          <button onClick={this.addMusicaNaPlaylist}>Adicionar</button>
          {MusicasDaPlaylist}
        </div>
        
      </div>
      
    )
  }
}
export default CriarPlaylists

