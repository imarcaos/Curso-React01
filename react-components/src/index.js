import ReactDom from 'react-dom/client'

// app
import App from "./App"

const root = document.querySelector("#root")
ReactDom.createRoot(root).render(<App />)
