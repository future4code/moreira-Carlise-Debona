
import React from "react";
import PaginaCadastro from "./components/PaginaCadastro";
import PaginaLista from "./components/PaginaLista";

export default class App extends React.Component {
    state = {
    telaPrincipal: "Lista"
  };

  escolherPagina = () => {
    if (this.state.telaPrincipal === "Cadastro") {
      this.setState({ telaPrincipal: "Cadastro" });
    } else {
      this.setState({ telaPrincipal: "Lista" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.escolherPagina}>Ia para outra Pagina</button>
        {this.state.telaPrincipal === "Lista" ? <PaginaCadastro /> : <PaginaLista />}
      </div>
    );
  }
}