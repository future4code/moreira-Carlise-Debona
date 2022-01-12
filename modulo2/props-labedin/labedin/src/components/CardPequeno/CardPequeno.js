import React from 'react';
//import './CardPequeno.css'

import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 50px;
`;


export const Titulo = styled.h4 `
  margin-bottom: 15px;
`;

export const ContainerCard2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

export const Endereco = styled.p`
  font-weight: bold;

`;

export const Email = styled.p`
  font-weight: bold;
  margin-left: 15px;
`

export const RespostaEndereco = styled.p`
  margin-left: 5px;
`;

export const RespostaEmail = styled.p`
  margin-left: 5px;
`;

function CardPequeno(props) {
    return (
        <Container className="smallcard-container">
            <img src={ props.imagem } width='30px' margin-right= '10px' border-radius= '50%'/>
            <ContainerCard2>
                <Email className="email">{ props.nome }</Email>
            </ContainerCard2>
            <ContainerCard2>
                <Endereco className="endereco">{ props.descricao }</Endereco>
            </ContainerCard2>
            <ContainerCard2>
                <RespostaEmail className="respostaEmail">{ props.email }</RespostaEmail>
            </ContainerCard2>
            <ContainerCard2>
                <RespostaEndereco className="respostaEndereco">{ props.endereco }</RespostaEndereco>
            </ContainerCard2>
        </Container>
    )
}

export default CardPequeno;