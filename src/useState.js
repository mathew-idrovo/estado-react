import React, { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

export default function UseState({ name }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Empezando efecto");

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo validacion");
        if (value === SECURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
        console.log("Terminando Validacion");
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h2> Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad</p>
      {error && !loading && <p> Error : codigo incorrecto</p>}
      {loading && <p> Cargando...</p>}
      <input
        placeholder="codigo de seguridad"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}
