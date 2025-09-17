import { useState } from "react";

export default function HookMegaSena() {
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  function sortearNumero() {
    if (numerosSorteados.length >= 6) {
      alert("Já temos 6 números sorteados!");
      return;
    }

    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 60) + 1;
    } while (numerosSorteados.includes(novoNumero));

    setNumeroSorteado(novoNumero);
    setNumerosSorteados([...numerosSorteados, novoNumero]);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Sorteador da Mega em React! :)</h1>
      <button onClick={sortearNumero}>Sortear Número</button>

      {numeroSorteado !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Último Número sorteado: {numeroSorteado}</h2>
          <h3>Sorteados: {numerosSorteados.join(" - ")}</h3>
        </div>
      )}
    </div>
  );
}
