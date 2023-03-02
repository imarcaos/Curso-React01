import React from "react"

export default (props) => {

    let valor1 = 100

    function executar() {
        valor1 = Math.random()
        props.funcao('Valor: ' + valor1, 'Marcos')
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            <button onClick={executar}>Executar</button>
            { /*<button onClick={() => {
                props.funcao(Math.random())
            }}>Executar</button> */}
            <p>{valor1}</p> { /* em react o valor1 não será atribuido desta forma por passar de filho para pai, ou seja através de uma variável e sim de uma propriedade*/}
        </div>
    )
}