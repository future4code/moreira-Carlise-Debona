import React from "react";
import Pergunta from "./Pergunta";


class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <Pergunta perguntar={"5. Qual curso?"} />
        <Pergunta perguntar={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;