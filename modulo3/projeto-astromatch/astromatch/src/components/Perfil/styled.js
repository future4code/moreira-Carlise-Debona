import styled from 'styled-components'

export const Img = styled.img`
    width: 100%;
    border: 2px solid #DC143C;
    border-radius: 1em;
    max-height: 65vh;
    
`

export const P = styled.p`
    position:relative;
    bottom: 5em;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
`
export const AreaFooter = styled.div`
position:relative;
bottom: 1em;
position:fixed;
display: flex;
left:7em;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background-color: white;
border-top: 2px solid #ffff; 

`
export const Botao = styled.div `
    justify-content: center;
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    padding: 0.5em;
    font-size: 0.8em;
    margin-left: 1.5em;
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


export const Perfil = styled.p`
    position:relative;
    bottom: 8em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color:white;
    font-weight: bold;
    padding: 0.5em;
    
`

export const Fundo = styled.div`
  
    width: 100%;
    z-index: 2;
    margin: 10px auto;
    position: relative;
    height: 70%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
`