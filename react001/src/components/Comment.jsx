import React from "react"
import './Comment.css'

function Comment(props) {

    let teste = "1234"

    function Maiusculas(texto) {
        return texto.toUpperCase()
    }

    return (
        <>
            <section className="comment">
                <p className="title">{Maiusculas(props.title)}</p>
                <p className="text">Texto do comentário</p>
                <p className="author">Autor: {props.author}</p>
                <p>{teste}</p>
            </section>
        </>
    )
}

export default Comment