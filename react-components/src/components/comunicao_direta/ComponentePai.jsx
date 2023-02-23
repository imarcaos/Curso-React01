import React from "react";

import ComponenteFilho from "./ComponenteFilho";

function ComponentePai(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Marcos Melo
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="secretária">
                Ana Silva
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="operador">
                Carlos Santos
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai