import React from "react";
import Header from '../../components/Headers'
import {Home} from './styled';
import {BASE_URL} from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';


function PageGetFeed(){

  const postslista = useRequestData([], `${BASE_URL}/posts`);
  console.log(postslista);


  const lposts = postslista.map((item) =>{
    return(

      <div key={item.id}>
          <p><strong>Nome: </strong>{item.username}</p>
          {/* <p><strong>Título: </strong>{item.title}</p> */}
          <p>{item.body}</p>
          <p><strong>Comentários:</strong>{item.createdAt}</p>
          <p><strong>Add:</strong>{item.userId}</p>
          <p><strong>Votos:</strong>{item.userVote}</p>
          <p><strong>Votar:</strong>{item.voteSum}</p>
          <p>{item.commentCount}</p>
      </div>
    )
  })

  return (
      <Home>
        <Header/>
        <div>{lposts}</div>
      </Home>


  )

}

export default PageGetFeed