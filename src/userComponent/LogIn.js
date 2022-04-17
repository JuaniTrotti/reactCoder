import { useContext } from 'react';
import { userContext } from './UserContext';

const LogIn = () => {
  const { logEmail, logPass, logIn, usuario, error } = useContext(userContext)
  return (
    <div className="App">
    <div>
      <h3> Log In </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          logEmail(event.target.value);
        }}
      />
      <input
        placeholder="Password..."
        onChange={(event) => {
          logPass(event.target.value);
        }}
      />

      <button onClick={logIn}> LogIn</button>
      {error ? <p>{error}</p> : null}
      <h4> User Logged In: </h4>
      {usuario?.email}

      

    </div>
  </div>
  )
}

export default LogIn