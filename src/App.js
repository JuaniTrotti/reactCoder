import NavBar from "./components/NavBar"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import Context from "./components/Context"

const App = () => {
    return (
        <Context>
            <BrowserRouter>
                <NavBar/>
                <Main/>
            </BrowserRouter>
        </Context>
    )
}

export default App;