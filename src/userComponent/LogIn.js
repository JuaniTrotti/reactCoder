import { useContext } from 'react';
import { userContext } from './UserContext';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  const { logEmail, logPass, logIn, error } = useContext(userContext)
  return (
    <>
      <div className="signUpContainer cFlex">
        <div className='inputContainer cFlex'>
          <div className='containerForm cFlex'>
            <div className='titleUser cFlex'>
              <h3>Log In</h3>
            </div>
            <div className='inputsContainer cFlex'>
              <div className='inCon cFlex'>
                <h2 className='text'>Mail</h2>
                <input className='inputTexto' placeholder="Email..." onChange={(event) => {logEmail(event.target.value);}}/>
              </div>
              <div className='inCon cFlex'>
                <h2 className='text'>Password</h2>
                <input className='inputTexto' placeholder="Password..." onChange={(event) => {logPass(event.target.value);}}/>
              </div>
            </div>
            <div className='errorContainer cFlex'>
              {error ? <p className='error'>{error}</p> : null}
            </div>
            <div className='containerBtn cFlex'>
              <div className='btnCon cFlex'><button onClick={logIn} className='textoBtn cFlex'>Log In</button></div>
              <NavLink to="/user/SignUp" className="btnCon cFlex"><button className='textoBtn cFlex'>Sign Up</button></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className='inicioBtn'>
        <NavLink to="/"><img src="../img/icon/logoApp.svg" alt="iconoInicio" /></NavLink>
      </div>
    </>
  )
}

export default LogIn






