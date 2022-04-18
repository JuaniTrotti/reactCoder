import { BrowserRouter } from "react-router-dom"
import React from 'react'
import Context from "./components/Context"
import PathController from "./components/PathController"
import UserContext from "./userComponent/UserContext"

const App = () => {
    return (
        <UserContext>
            <Context>
                <BrowserRouter>
                    <PathController/>
                </BrowserRouter>
            </Context>
        </UserContext>
    )
}

export default App;