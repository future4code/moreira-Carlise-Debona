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
// export const MatchIcon = styled(Icon)`
// 	display: block;
// 	fill: #4AA397;
// `

// export const List = styled.ul`
//   padding: 0 10px;
// `

// export const ListItem = styled.li`
//   position: relative;
//   height: 70px;
//   padding: 10px;
//   display: flex;
//   list-style: none;
//   width: 100%;
//   transition: 0.2s;
//   cursor: pointer;
  
//   :hover {
//     background: #eee;
//   }
  
//   :last-child {
//     border: unset;
//   }
  
//   :active {
// 			:before {
// 				height: 100%;
// 				width: 100%;
// 				top: 0;
//     		left: 0;
//     		position: absolute;
//     		background-color: rgba(0, 0, 0, 0.1);
//     		content: "";
// 			}
//    }
// `

// export const Avatar = styled.div`
//   height: 100%;
//   width: 50px;
//   margin-right: 10px;
//   border-radius: 50%;
//   background: url(${props => props.src});
//   background-position: center center;
//   background-size: 100%;
//   background-repeat: no-repeat;
// `

// export const ListText = styled.p`
//   user-select: none;
// `