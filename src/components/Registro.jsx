import { useState } from "react";
import { registro } from "../services/usuarios.service";

export default function Registro() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");

  const doRegistro = async (e) => {
    e.preventDefault();
    await registro(alias, password);
    /*
    fetch("http://localhost:8080/api/usuarios/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alias, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    */
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={doRegistro}>
        <input
          name="alias"
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
}
