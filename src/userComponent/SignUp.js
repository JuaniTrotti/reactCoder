import { useContext } from 'react';
import { userContext } from './UserContext';
import { db } from '../components/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const SignUp = () => {

  const { regEmail, regPass, register, passTrue, emailTrue, regNombre, regTelefono } = useContext(userContext)
  
  return (
    <div className="App">
    <div>
      <h3> Register User </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          regEmail(event.target.value);
        }}
      />
      <input
        placeholder="Password..."
        onChange={(event) => {
          regPass(event.target.value);
        }}
      />
      <input
        placeholder="Nombre..."  
        onChange={(event) => {
          regNombre(event.target.value);
        }}
      />
      <input
        placeholder="Telefono..."
        onChange={(event) => {
          regTelefono(event.target.value);
        }}
      />

      {passTrue && emailTrue ? <button onClick={register}> Create User</button> : null}
    </div>
  </div>
  )
}

export default SignUp