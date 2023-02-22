import React from "react"
import './App.css'

// componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"
import ComponenteQuatro from "./components/ComponenteQuatro"
import ComponenteSeis from "./components/ComponenteSeis"
import ComponenteSete from "./components/ComponenteSete"
import ComponenteOito from "./components/ComponenteOito"
import ComponenteNove from "./components/ComponenteNove"
import ComponenteDez from "./components/ComponenteDez"

function App() {
    return (
        <>
            <ComponenteDez titulo="Componente Dez" corTexto="green" />

            <ComponenteNove titulo="Componente Nove" valor="Marcos" />

            {/* <ComponenteOito titulo="Componente Oito" valor={10} /> */}
            <ComponenteOito titulo="Componente Oito" valor="Marcos" />

            <ComponenteSete titulo="Componente Sete" valor={1} />

            <ComponenteSeis titulo="Componente Seis" />

            <ComponenteQuatro titulo="Componente quatro" />

            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />

            <ComponenteDois />

            <ComponenteUm />
        </>
    )
}

export default App