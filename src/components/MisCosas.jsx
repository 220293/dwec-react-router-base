import { useEffect, useState } from "react";

export default function MisCosas() {
  const [cosas, setCosas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/cosas", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCosas(data);
        console.log(data);
      });
  }, []);

  const rows = cosas.map(cosa =>
      <tr>
        <td>{cosa.nombre}</td>
      </tr>
  );

  return (
    <div>
      <h1>Mis cosas</h1>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
    
  );
}
