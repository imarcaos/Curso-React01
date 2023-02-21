import React from "react";

export default function (props) {

    function condicao() {
        if (props.valor >= 10) {
            return <p>O valor é igual ou superior a 10</p>
        } else {
            return <p>O valor é inferior ou superior a 10</p>
        }
    }

    function condicao2() {
        switch (props.valor) {
            case "João":
                return <p>{props.valor} é o nome do Professor</p>
                break;
            case "Marcos":
                return <p>{props.valor} é o meu nome</p>
                break;
            default:
                return <p>{props.valor} desconheço quem tenha esse nome</p>
                break;
        }
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {condicao2()}
        </div>
    )
}