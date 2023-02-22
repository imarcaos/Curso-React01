import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function (props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor == "Marcos"}>
                <p>Verdadeiro, é o meu nome</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor == "Ana"}>
                <p>É a minha cunhada</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor != "Marcos" && props.valor != "Ana"}>
                <p>Falso, desconheço este nome</p>
            </CondicaoIf>
        </div>
    )
}
