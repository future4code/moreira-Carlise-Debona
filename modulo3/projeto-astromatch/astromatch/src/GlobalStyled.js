import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle `
  * {
    font-family: 'Montserrat', sans-serif;
  }  
  body {
    display: block;
    margin-left:35%;
    margin-right:35%;
    padding: 0;
    box-sizing: border-box;
    border: 2px solid #DC143C;
    border-radius: 0.8em;
    flex: 1 1 0%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
   
    
  }
`