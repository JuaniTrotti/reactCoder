import { useContext } from 'react';
import { userContext } from './UserContext';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  const { logEmail, logPass, logIn, usuario, error } = useContext(userContext)
  // return (
  //   <div className="App">
  //   <div>
  //     <h3> Log In </h3>
  //     <input
  //       placeholder="Email..."
  //       onChange={(event) => {
  //         logEmail(event.target.value);
  //       }}
  //     />
  //     <input
  //       placeholder="Password..."
  //       onChange={(event) => {
  //         logPass(event.target.value);
  //       }}
  //     />



      

  //   </div>
  // </div>
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
              <div className="btnCon cFlex"><button onClick={logIn} className="textoBtn cFlex">LogIn</button></div>
              <NavLink to="/user/SignUp" className="btnCon cFlex"><button className='textoBtn cFlex'>Sign Up</button></NavLink>
              {/* {passTrue && emailTrue ? <NavLink to="/" className="btnCon cFlex"><button onClick={register} className='textoBtn cFlex'>Sign Up</button></NavLink> : <div className='btnCon cFlex'><button className='textoBtn bloq cFlex'>Sign Up</button></div>} */}
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

export default LogIn






