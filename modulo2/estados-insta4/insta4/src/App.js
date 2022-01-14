import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  padding-bottom: 40px;
  
`;
const AdicionarPost = styled.footer`
    display: flex;
    position: fixed;
    background-color: black;
    bottom: 0px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-left: 740px;
`
const Header = styled.header`
  background-color: black;
  display:flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0px 20px;
  color: white;

.campoBusca {
  border: 0 none;
  padding: 1px 1px;
  outline: 0;
}
`

class Insta4 extends React.Component {

  state = {

    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'nicoly',
        fotoUsuario:'https://media-manager.noticiasaominuto.com.br/gallery/1920/naom_5b5ae8f21be67.jpg',
        fotoPost:'https://freeway.tur.br/userfiles/images/viagens-autoconhecimento-como-por-que-influenciam.jpg'
      },
      {
        nomeUsuario: 'gustavo',
        fotoUsuario:'https://i0.wp.com/blog.seja2share.com.br/wp-content/uploads/2021/07/como-aproveitar-suas-ferias-com-a-rci-viagens-740x379.png',
        fotoPost:'https://catracalivre.com.br/wp-content/uploads/2019/10/pacotes-viagem-cvc-esquenta-black-friday-910x607.jpg'
      }
    ],
    valorInputnomeUsuario: "",
    valorInputfotoUsuario: "",
    valorInputfotoPost:""
  };

  adicionaPost = () => {
   
  const novoPost = {
      
      nomeUsuario: this.state.valorInputnomeUsuario,
      fotoUsuario: this.state.valorInputfotoUsuario,
      fotoPost: this.state.valorInputfotoPost
    };
    
  const novosPost = [...this.state.posts, novoPost];

    this.setState({ posts: novosPost, 
      valorInputnomeUsuario: "",
      valorInputfotoUsuario: "",
      valorInputfotoPost:""
    });
  };
 
  onChangeInputnomeUsuario = (event) => {
    this.setState({ valorInputnomeUsuario: event.target.value });
  };
 
  onChangeInputfotoUsuario = (event) => { 
    this.setState({ valorInputfotoUsuario: event.target.value });
  };
 
  onChangeInputfotoPost = (event) => {
    this.setState({ valorInputfotoPost: event.target.value });
  };


  render() {
    const listaDePosts = this.state.posts.map((poste, index) => {

      return (
        <Post key={index}
      nomeUsuario = {poste.nomeUsuario}
      fotoUsuario = {poste.fotoUsuario}
      fotoPost = {poste.fotoPost}
        /> 
      
      );

    });

    return (
      <div>
        <Header>
          <h2>Insta4</h2>
          <input type="text" class="campoBusca" placeholder="Buscar"/>
        </Header>
        <MainContainer>
          {listaDePosts}
        </MainContainer>
        <AdicionarPost>
          <input
          value ={this.state.valorInputnomeUsuario}
          onChange={this.onChangeInputnomeUsuario}
          placeholder= {"Nome"}
          />
          <input
          value ={this.state.valorInputfotoUsuario}
          onChange={this.onChangeInputfotoUsuario}
          placeholder= {"Foto Perfil"}
          />
          <input
          value ={this.state.valorInputfotoPost}
          onChange={this.onChangeInputfotoPost}
          placeholder= {"Foto"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </AdicionarPost>
      </div>

      
      
    );
  }
}

export default Insta4;


