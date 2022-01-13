import React from 'react';
//import './CardGrande.css';
import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

export const Img = styled.img`
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const Titulo = styled.h4 `
  margin-bottom: 15px;
  margin-left: 15px;
`;

export const P = styled.p `
  margin-bottom: 15px;
  margin-left: 15px;
  text-align: justify;
  margin-right: 15px;

`;

export const ContainerCard2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <Container className="bigcard-container">
            <Img src={ props.imagem } //width='50px' margin-right= '10px' border-radius= '50%'
            />
            <ContainerCard2 >
                <Titulo>{ props.nome }</Titulo>
                <P>{ props.descricao }</P>
            </ContainerCard2>
        </Container>
    )
}

export default CardGrande;