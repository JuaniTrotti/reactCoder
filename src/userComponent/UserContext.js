import { createContext, useState, useEffect } from "react"
import validator from "validator"

export const userContext = createContext()
const { Provider } = userContext

const UserContext = ({children}) => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
    
  const regEmail = (i) => {
    setRegisterEmail(i) 
    console.log(validator.isEmail(registerEmail))
  }

  const regPass = (i) => {
    setRegisterPassword(i)
    console.log(validator.isStrongPassword(registerPassword))
  }

  const logEmail = () => {}
  const logPass = () => {}

  const user = {
    regEmail : registerEmail,
    regPassword : registerPassword,
    logEmail : loginEmail,
    logPassword : loginPassword.at,

    regEmail : regEmail,
    regPass : regPass,
    logEmail : logEmail,
    logPass : logPass,


  }

  return (
    <Provider value={user}>
        { children }
    </Provider>
  )
}

export default UserContext