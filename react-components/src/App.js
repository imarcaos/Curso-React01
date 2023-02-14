import React from "react"
import './App.css'

// componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponenteQuatro"

function App() {
    return (
        <>
            <ComponenteQuatro titulo="Componente quatro">
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </ComponenteQuatro>
            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />
            <ComponenteDois />
            <ComponenteUm />
        </>
    )
}

export default App