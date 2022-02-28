//1) tener la variable react en el scope\
import React from 'react';
//2) tener la variable reactDOM en el scope
import ReactDOM from 'react-dom'
import App from './App'
import "./components/style.scss"

//4) renderizar App en el DOM
ReactDOM.render(<App/> ,document.querySelector('#root')) 