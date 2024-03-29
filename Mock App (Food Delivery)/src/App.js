import React from "react"
import ReactDOM from "react-dom/client"
import { Body } from "./Components/Body"
import { Header } from "./Components/Header"
import "./style.css"



const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)