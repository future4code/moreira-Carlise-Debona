import styled from 'styled-components'


export const H3= styled.h3`
  position: relative;
  top: 150px;
  color:white;
  text-align:center;
  font-size: 2.5em;
  padding-left: 7em;
  padding-right: 7em;
`

export const Home = styled.div`
  background-image: url("https://i.postimg.cc/g2jFxyvj/Papel-de-Parede-Azul-Montanha-Fotoc-ntrico-Religioso-Espiritual-1.png"); 
  background-repeat: no-repeat;
  position: relative;
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: stretch;
`

export const Button = styled.button`
  position: relative;
  border-color: white;
  border-radius: 10em;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: white;
  cursor: pointer;
  margin: 80px;
  background-color: transparent;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
`

export const RedesSociais= styled.div`
  display: flex;
  flex-direction: column;

    .icone{
      flex: 1;
      margin: 0.5em;
      color:white;
      font-size: 1em;
    }
`

export const DivButton =styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 150px;
`
export const Div =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`

export const DivP =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2em;
    position: relative;
    top: 100px;
    font-weight: bold;
`



