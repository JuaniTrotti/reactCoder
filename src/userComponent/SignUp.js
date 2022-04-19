import { useContext } from 'react';
import { userContext } from './UserContext';
import { NavLink } from 'react-router-dom';

const SignUp = () => {

  const { regEmail, regPass, register, passTrue, emailTrue, regNombre, regTelefono } = useContext(userContext)
  
  return (
    <>
      <div className="signUpContainer cFlex">
        <div className='inputContainer cFlex'>
          <div className='containerForm cFlex'>
            <div className='titleUser cFlex'>
              <h3>Register</h3>
            </div>
            <div className='inputsContainer cFlex'>
              <div className='inCon cFlex'>
                <h2 className='text'>Mail</h2>
                <input className='inputTexto' placeholder="Email..." onChange={(event) => {regEmail(event.target.value);}}/>
              </div>
              <div className='inCon cFlex'>
                <h2 className='text'>Password</h2>
                <input className='inputTexto' placeholder="Password..." onChange={(event) => {regPass(event.target.value);}}/>
              </div>
              <div className='inCon cFlex'>
                <h2 className='text'>Name</h2>
                <input className='inputTexto' placeholder="Nombre..."   onChange={(event) => {regNombre(event.target.value);}}/>
              </div>
              <div className='inCon cFlex'>
                <h2 className='text'>Phone</h2>
                <input className='inputTexto' placeholder="Telefono..." onChange={(event) => {regTelefono(event.target.value);}}/>
              </div>
            </div>
            <div className='containerBtn cFlex'>
              {passTrue && emailTrue ? <NavLink to="/" className="btnCon cFlex"><button onClick={register} className='textoBtn cFlex'>Sign Up</button></NavLink> : <div className='btnCon cFlex'><button className='textoBtn bloq cFlex'>Sign Up</button></div>}
              <NavLink to="/user/LogIn" className="btnCon cFlex"><button className='textoBtn cFlex'>Log In</button></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className='inicioBtn'>
        <NavLink to="/"><img src="../img/icon/logoApp.svg" alt="" /></NavLink>
      </div>
    </>
  )
}

export default SignUp