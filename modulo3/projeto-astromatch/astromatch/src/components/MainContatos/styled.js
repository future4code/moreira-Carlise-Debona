import styled from 'styled-components'

export const H1 = styled.h1`
    color: #08454d;
    text-align: center;
    margin-top: 50px;

`

export const Foto = styled.img`
   
   border-radius: 10em;
   max-width: 5%;

`
export const Nome = styled.p`
   font-size: 1em;

`

export const Botao = styled.div `
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: transparent;
        color:transparent;
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
`

export const DivHome = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  margin: 0px auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;



`