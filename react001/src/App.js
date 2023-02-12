import React from "react"
import Comment from "./components/Comment"

function App() {
    return (
        <>
            <h1>Comentários</h1>
            <Comment title="Comentário Um" author="Marcos Melo" />
            <Comment title="Comentário Dois" author="João Ribeiro" />
            <Comment title="Comentário Três" author="Sandra Melo" />
        </>
    )
}

export default App