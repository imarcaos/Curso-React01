import React, { useState } from "react";

export default function App() {

    const [valor, setValor] = useState(100)

    function diminuir() {
        setValor(valor_antigo => valor_antigo - 1)
        /* setValor(valor - 1) */
    }

    function aumentar() {
        setValor(valor_antigo => valor_antigo + 1)
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <button onClick={diminuir}>Diminuir</button>
            <span>{valor} </span>
            <button onClick={aumentar}>Aumentar</button>

            /* Código abaixo apenas de exemplo, pois devemos chamar sempre em forma de função*/
            <button onClick={() => {
                /* setValor(valor + 10) */
                setValor(va => va + 100) // va= valor antigo
            }}>Aumentar_v2</button>
        </>
    )
}