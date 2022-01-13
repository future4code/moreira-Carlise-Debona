import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
// import styled from 'styled-components';
import fotoPerfil from './Imagens/FotoCarlise.jpg';




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Carlise Debona" 
          descricao="Olá, meu nome é Carlise. Sou estudante do curso Programação Full Stack Labenu. 
          Formação acadêmica voltada para Tecnologia, Gestão e Análise de Negócios. Humildade, Desenvolvimento, Adaptação, Visão e Engajamento 
          carrego comigo o tempo todo, pois é o que me faz crescer em todas os aspectos da vida."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178283.png" 
          nome="Email:  " 
          email="carlise@gmail.com"
        />
        
        <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/3838/premium/3838364.png" 
          nome="Endereço: " 
          endereco="Av. Carlise"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/4541/4541804.png" 
          nome="Postmetria" 
          descricao="Chief Customer Officer (CCO)." 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/4541/4541745.png" 
          nome="Athenice" 
          descricao="Gestão e elaboração de projetos, Captação de Recursos e Estatutos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
