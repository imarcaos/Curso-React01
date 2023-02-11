import React from "react"
import './Comment.css'

function Comment() {
    return (
        <>
            <section className="comment">
                <p className="title">Título</p>
                <p className="text">Texto do comentário</p>
                <p className="author">Autor: Marcos Melo</p>
            </section>
        </>
    )
}

export default Comment