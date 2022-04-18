import React from 'react'

import NavBar from './NavBar'
import Main from "./Main"
import FooterContainer from "./FooterContainer"
import Banner from './Banner'

import User from '../userComponent/User'

import { useLocation } from "react-router-dom";

const PathController = () => {
    const location = useLocation();

    if (location.pathname != "/user/LogIn" && location.pathname != "/user/SignUp") {
        return (
            <div className="responsiveController cFlex">
                <div className="paginaContainer cFlex">
                    <NavBar/>
                    <Banner/>
                    <Main/>
                    <FooterContainer/>
                </div>
            </div>
        )
    } else {
        return(
            <div className="responsiveController cFlex">
                <div className="paginaContainer cFlex">
                    <User/>
                </div>
            </div>
        )
    }
}

export default PathController