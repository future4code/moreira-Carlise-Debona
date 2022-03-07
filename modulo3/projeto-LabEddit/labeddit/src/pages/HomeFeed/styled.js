import styled from 'styled-components'

export const Div = styled.div`
 background-color:#DCDCDC;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items:center;
  

`

export const Home = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color:#DCDCDC;

 
`

export const DivForm = styled.div`
  border: 2px solid #D5F50B;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 50px;
  width:35%;
  background-color: white;
  
`

export const Form = styled.form`
padding-top: 5px;
padding-bottom: 10px;
 .input{
  border: 1px solid black;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  padding-left: 10px;
  margin-right: 10px;
  outline: 0;
 }
`
export const DivBody = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  width: 80%;
`

export const Name = styled.p`
  border-bottom: 2px solid #D5F50B;
  padding-bottom: 15px;
  width: 100%;
  text-align: center;

`

export const Text = styled.p`
  border-bottom: 2px solid #D5F50B;
  padding-bottom: 15px;
  width: 100%;
  text-align: center;

`

export const DivPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 20px;
  width: 100%;

`

export const ButtonIo = styled.div `
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
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

export const ButtonSend = styled.button`
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