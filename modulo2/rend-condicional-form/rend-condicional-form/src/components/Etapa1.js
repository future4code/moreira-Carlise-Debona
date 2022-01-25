import React from 'react';
import Pergunta from "./Pergunta";
import Opcoes from "./Opcoes";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <Pergunta perguntar={"1. Qual o seu nome?"} />
        <Pergunta perguntar={"2. Qual sua idade?"} />
        <Pergunta perguntar={"3. Qual seu email?"} />
        <Opcoes
          perguntar={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}/>
      </div>
    );
  }
}

export default Etapa1;