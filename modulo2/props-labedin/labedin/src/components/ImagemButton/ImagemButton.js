import React from 'react';
//import './ImagemButton.css'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`;


function ImagemButton(props) {
    return (
        <Container className="image-button-container">
            <img src={ props.imagem } width='30px' margin-right= '20px'/>
            <p>{ props.texto }</p>
        </Container>

    )
}

export default ImagemButton;