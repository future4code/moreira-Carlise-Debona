
import styled from 'styled-components';

export const ButtonBack =styled.button`
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

export const Home= styled.div`
  background-image: url('https://i.postimg.cc/xdVZPtnR/404-page-not-found-Community.png');
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
  justify-content: space-evenly;
  align-items:center;

`