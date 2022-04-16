import { createContext, useState, useEffect } from "react"
import validator from "validator"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth";
import { auth } from "../components/Firebase";
import { db } from "../components/Firebase";
import { collection, addDoc } from "firebase/firestore";

export const userContext = createContext()
const { Provider } = userContext

const UserContext = ({children}) => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const [passTrue, setPassTrue] = useState(false);
  const [emailTrue, setEmailTrue] = useState(false);

  const [usuario, setUsuario] = useState({});
    
  onAuthStateChanged(auth, (currentUser) => {
    setUsuario(currentUser);
  });

  const handleRegister = () => {
    const usuario = {
      email: registerEmail,
      nombre: nombre,
      telefono: telefono
    }

    console.log(nombre)
    console.log(telefono)

    const usuarioCollection = collection(db, "user")
    const userDoc = addDoc(usuarioCollection, usuario)
    userDoc
    .then(() => {
      console.log("Usuario creado")
    })
    .catch(()=>console.log("Error al crear usuario"))
  }

  const regNombre = (i) => {
    setNombre(i)
    console.log(nombre)
  }

  const regTelefono = (i) => {
    setTelefono(i)
    console.log(telefono)
  }

  const regEmail = (i) => {
    setRegisterEmail(i) 
    if (validator.isEmail(registerEmail)) {
      setEmailTrue(true)
      console.log(emailTrue)
    } else {
      console.log("no es email")
    }
  }

  const regPass = (i) => {
    setRegisterPassword(i)
    if (validator.isStrongPassword(registerPassword)) {
      setPassTrue(true)
      handleRegister()
      console.log(passTrue)
    } else {
      console.log("no es password")
    }
  }

  const logEmail = (i) => {
    setLoginEmail(i)
    console.log(validator.isEmail(loginEmail))
  }
  const logPass = (i) => {
    setLoginPassword(i)
    console.log(validator.isStrongPassword(loginPassword))
  }

  const register = async () => {
    try {
      const usuario = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      handleRegister()
      console.log(usuario)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logIn = async () => {
    try {
      const usuario = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(usuario);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logOut = async () => {
    await signOut(auth)
    setUsuario({})
  }



  const user = {
    regEmail : registerEmail,
    regPassword : registerPassword,
    logEmail : loginEmail,
    logPassword : loginPassword.at,
    usuario : usuario,
    nombre : nombre,
    telefono : telefono,

    regEmail : regEmail,
    regPass : regPass,
    regNombre : regNombre,
    regTelefono : regTelefono,
    logEmail : logEmail,
    logPass : logPass,
    register : register,
    logIn : logIn,
    logOut : logOut,

    passTrue : passTrue,
    emailTrue : emailTrue
  }

  return (
    <Provider value={user}>
        { children }
    </Provider>
  )
}

export default UserContext