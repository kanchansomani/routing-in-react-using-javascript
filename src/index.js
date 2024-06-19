import ReactDOM from "react-dom/client"

import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"

const root = ReactDOM.createRoot(document.getElementById("root"))

const path = window.location.pathname

if(path == "/"){
    root.render(<Home />)
}
else if(path == "/about"){
    root.render(<About />)
}
else if(path == "/contact"){
    root.render(<Contact/>)
}
else{
    root.render(<h1>404 Page Not Found</h1>)
}