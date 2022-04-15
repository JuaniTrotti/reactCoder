import { BrowserRouter } from "react-router-dom"
import React from 'react'
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import FooterContainer from "./components/FooterContainer"
import Context from "./components/Context"
import { useParams } from "react-router-dom"

const App = () => {
    const { id } = useParams()
    console.log(id)
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


