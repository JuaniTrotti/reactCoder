import { useContext } from 'react';
import { userContext } from './UserContext';

const SignUp = () => {

  const { regEmail, regPass } = useContext(userContext)
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

      <button> Create User</button>
    </div>
  </div>
  )
}

export default SignUp