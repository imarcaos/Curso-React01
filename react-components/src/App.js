import React from "react"
import './App.css'

// componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponenteQuatro"
import ComponenteSeis from "./components/ComponenteSeis"

function App() {
    return (
        <>

            <ComponenteSeis titulo="Componente Seis"></ComponenteSeis>
            <ComponenteQuatro titulo="Componente quatro" />

            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />
            <ComponenteDois />

            <ComponenteUm />
        </>
    )
}

export default App