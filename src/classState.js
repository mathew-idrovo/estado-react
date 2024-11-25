import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";
class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      value: "",
      loading: false,
    };
  }
  componentDidUpdate() {
    console.log("actualizacion");
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }

        console.log("terminando la validación");
      }, 3000);
    }
  }
  render() {
    return (
      <div>
        <h2> Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el codigo de seguridad</p>
        {this.state.error && !this.state.loading && <p>Error : en el codigo</p>}
        {this.state.loading && <Loading />}
        <input
          placeholder="codigo de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
