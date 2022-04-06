import NavBar from "./components/NavBar"
import Main from "./components/Main"
import FooterContainer from "./components/FooterContainer"
import { BrowserRouter } from "react-router-dom"
import Context from "./components/Context"

const App = () => {
    return (
        <Context>
            <BrowserRouter>
                <div className="responsiveController cFlex">
                    <div className="paginaContainer cFlex">
                        <NavBar/>
                        <Main/>
                        <FooterContainer/>
                    </div>
                </div>
            </BrowserRouter>
        </Context>
    )
}

export default App;