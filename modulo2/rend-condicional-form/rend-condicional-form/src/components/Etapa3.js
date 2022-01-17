import React from 'react';
import Pergunta from "./Pergunta";
import Opcoes from "./Opcoes";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <Pergunta
          perguntar={"5. Por que você não terminou um curso de graduação?"}
        />
        <Opcoes
          perguntar={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso Técnico", "Curso de Inglês", "Curso de Espanhol"]}/>
      </div>
    );
  }
}

export default Etapa3;