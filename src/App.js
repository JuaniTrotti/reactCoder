import { BrowserRouter } from "react-router-dom"
import React from 'react'
import Context from "./components/Context"

import NavBar from './components/NavBar'
import Main from "./components/Main"
import FooterContainer from "./components/FooterContainer"

import PathController from "./components/PathController"




import UserContext from "./userComponent/UserContext"



const App = () => {
    return (
        <UserContext>
            <Context>
                <BrowserRouter>
                    {/* <div className="responsiveController cFlex">
                        <div className="paginaContainer cFlex">
                            <NavBar/>
                            <Main/>
                            <FooterContainer/>
                        </div>
                    </div> */}
                    <PathController/>
                </BrowserRouter>
            </Context>
        </UserContext>
    )
}

export default App;


