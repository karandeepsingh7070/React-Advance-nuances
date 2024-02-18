import React from "react"
import ReactDOM from "react-dom/client"

let heading = React.createElement("h1",{id : "heading"}, "Creating Element using React Methods!")
let jsxHeading = <h1>Creating Element using JSX!</h1>

// heading is react element which is js object 
// similiarly jsxHeading will also be a js object and identical to the react element, as Babel transpile jsx into react element
let parent = React.createElement('div',{id : 'parent'}, heading)
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)