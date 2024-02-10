

let heading = React.createElement("h1",{id : "heading"}, "Creating Element using React Methods!")
let subHeading = React.createElement('h3',{}, "I'm a sibling Element")
let child = React.createElement('div',{id : "child"}, [heading, subHeading])
let child2 = React.createElement('div',{id : "child"}, [heading, subHeading])
let parent = React.createElement('div',{id : 'parent'}, [child, child2])
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)