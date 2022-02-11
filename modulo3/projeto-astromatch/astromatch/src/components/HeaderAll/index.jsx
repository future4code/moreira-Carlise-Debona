import React from "react";
// import axios from "axios";
import {Header, Img, Botao} from './styled';
import {Link} from 'react-router-dom';
import {TiChevronLeft} from 'react-icons/ti';
// import {BsFillTrashFill} from 'react-icons/bs';


export default function HeaderAll() {

  // const [matches, setMatches] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get(
  //     "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/matches"
  //   )
  //   .then((response) => {
  //     console.log(response.data.matches);
  //     setMatches(response.data.matches);
  //   })
  //   .catch((erro) => {
  //     console.log(erro);
  //   });
  // }, [matches]);



  // const resetLista = () => {
  // axios
  //   .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlise/clear`)
  //   .then(response => {
  //     alert("Lista Exclída com Sucesso!")
  //     console.log(response.data)
  //   })
  //   .catch(err =>{ 
  //     alert("Erro, tente novamente")
  //     console.log(err)});
  // }

        return (
          <Header>
            <Botao><Link to="/"><TiChevronLeft color="white" fontSize="2em"/></Link></Botao>
            <Img src="https://i.postimg.cc/MpdmMQNh/logo3.png"></Img>
            {/* <Botao onClick={()=>{resetLista()}}> <BsFillTrashFill color="white" fontSize="1.6em"/></Botao> */}
          </Header>
        );
}



