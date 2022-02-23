import styled from 'styled-components';

export const Home = styled.div`
  background-color:#DCDCDC;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items:center;
  
`

export const ImgLogo= styled.img`
 width: 50%;
`

export const DivLogo= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    .h3{
      padding-top:50px;
      color: black;
    }
`

export const DivInput= styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
 `

export const DivButton= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;

`

export const Input= styled.input`
  margin-top: 20px;
  height: 20px; 
  border-radius: 30px;
  border: 1px solid black;
  outline: 0;
  font-size: 15px;
  padding:10px;
  width: 70%;

`

export const Button = styled.button`
  position: relative;
  border-color: white;
  border-radius: 10em;
  border: none;
  margin: 20px; 
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: black;
  cursor: pointer;
  margin-top: 50px;
  background-color: #D5F50B;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
`