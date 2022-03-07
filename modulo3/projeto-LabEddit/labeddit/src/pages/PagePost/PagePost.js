import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom"
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import Headers from '../../components/HedersPost/HeaderPost';
import {Home, ButtonSend, Form, DivForm, Name, DivBody, Text, DivComments, DivPosts, Div} from './styled';

export default function PostPageDetails() {

  const params = useParams()

  const posts = useRequestData([], `${BASE_URL}/posts`);
  let newPosts;
 

  if (posts !== {} && posts.length) {
    newPosts = posts
      ?.filter((item) => {
        return item.id === params.id;
      })
      .map((item) => {
        return (
        <DivForm key={item.id}>
          <Name><strong>Nome: </strong>{item.username}</Name>
          <DivBody>
            <p><strong>Título: </strong>{item.title}</p>
          </DivBody>
         
          <Text>
            <p>{item.body}</p>
          </Text>
         
          <p><strong>Votos: </strong>{item.voteSum}</p>
          {/* <div>
          <button > Positivo</button>
          
          <button > Deletar voto</button>
          </div> */}
            
          <div><p><strong>Comentários:</strong>{item.commentCount}</p></div>

      </DivForm>
    )
})
  }

  const { form, onChange, cleanFields } = useForm({body: ""});
  

  const onSubmitCommentPost = () => {
    const body = form
    const url = `${BASE_URL}/posts/${params.id}/comments`
    const headers = {Authorization: localStorage.getItem("token")}

    axios.post(url, body, {headers})
    .then((res) => {
        console.log(res.data)
        alert("Comentário enviado")
        cleanFields()
    })
    .catch((error) => {
        
        console.log(error.res);
        
    })
  }

  const onSubmitComments = (event) => {
    event.preventDefault()
    onSubmitCommentPost(form, cleanFields, params.id)
    console.log("Formulário enviado!", form)
    cleanFields()
   
}

const commentsUser = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);

const listComments = commentsUser.map((item)=>{
  return (
      <DivForm key={item.id}>
        
            <p className="p">{item.body}</p>
          
      </DivForm>
  )
})


  return (
    <Div>
    <Headers/>
      <Home>       
        <DivPosts>{newPosts}</DivPosts>
          <DivComments>
            {listComments}
          </DivComments>
          <Form onClick={onSubmitComments}>
                    <input className="input"
                    name={"body"}
                    value={form.body}
                    placeholder="Comentário"
                    onChange={onChange}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                    />
                    <ButtonSend type="submit"> Enviar </ButtonSend> 
            </Form>
     </Home>
    </Div>
  )
}



