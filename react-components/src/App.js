import React from "react"
import './App.css'

// componentes
import ComponenteUm from "./components/ComponenteUm"
import ComponenteDois from "./components/ComponenteDois"
import ComponenteTres from "./components/ComponenteTres"

function App() {
    return (
        <>
            <ComponenteTres titulo="teste" />
            <ComponenteDois />
            <ComponenteUm />
        </>
    )
}

export default App