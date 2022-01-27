
import React from "react";
import SignUpPage from "./components/PaginaCadastro";
import Users from "./components/PaginaLista";

export default class App extends React.Component {
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "signUp" ? <SignUpPage /> : <Users />}
      </div>
    );
  }
}