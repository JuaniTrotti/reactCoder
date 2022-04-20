import { createContext, useState } from "react"
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

  const [error, setError] = useState("");
    
  onAuthStateChanged(auth, (currentUser) => {
    setUsuario(currentUser);
  });

  const handleError = (err) => {
    if (err === "auth/user-not-found") {
      setError("no existe el usuario");
    } else if (err === "auth/wrong-password") {
      setError("contraseña incorrecta");
    } else if (err === "auth/email-already-in-use") {
      setError("el email ya esta en uso");
    }
  }

  const cleanReg = () => {
    setRegisterEmail("");
    setRegisterPassword("");
    setNombre("");
    setTelefono("");
  }

  const regNombre = (i) => {
    setNombre(i)
  }

  const regTelefono = (i) => {
    setTelefono(i)
  }

  const regEmail = (i) => {
    setRegisterEmail(i) 
    if (validator.isEmail(registerEmail)) {
      setEmailTrue(true)
    }
  }

  const regPass = (i) => {
    setRegisterPassword(i)
    if (validator.isStrongPassword(registerPassword)) {
      setPassTrue(true)
    }
  }

  const logEmail = (i) => {
    setLoginEmail(i)
  }
  const logPass = (i) => {
    setLoginPassword(i)
  }

  const register = async () => {
    try {
      const usuario = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const datosUser = {
        email: registerEmail,
        nombre: nombre,
        telefono: telefono
      }
  
      const usuarioCollection = collection(db, "user")
      const userDoc = addDoc(usuarioCollection, datosUser)
      userDoc
      .then(() => {
        console.log("Usuario creado")
      })
      .catch(()=>console.log("Error al crear usuario"))

      cleanReg()

    } catch (error) {
      console.log(error.code)
    }
  }

  const logIn = async () => {
    try {
      const usuario = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setError("")
    } catch (error) {
      handleError(error.code)
    }
  }

  const logOut = async () => {
    await signOut(auth)
    setUsuario({})
    setLoginEmail("")
    setLoginPassword("")
  }

  const user = {
    registerEmail : registerEmail,
    regPassword : registerPassword,
    loginEmail : loginEmail,
    logPassword : loginPassword.at,
    usuario : usuario,
    error : error,

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