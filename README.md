
# Proyecto ReactJs CoderHouse

E-Commerce dirigido a un creador de contenido digital.

## Componentes
![img](https://github.com/JuaniTrotti/reactCoder/blob/master/public/img/imgReadMe/componentes.jpg)


### UserContext
**Funcionalidad:**

Este componente se encarga de almacenar tanto metodos como variables sobre el usuario. Este componente es padre de toda la App para que todos los componentes puedan acceder y compartir información sobre el Usuario. 

**Explicación a fondo sobre UserContext**

### Context
**Funcionalidad:**

Este componente se encarga de almacenar tanto metodos como variables sobre el carrito. Este componente es padre de toda la App, de esta forma cualquier componente puede acceder a sus metodos y compartir variables con otros componentes.

### PathController
**Funcionalidad:**

Este componente se encarga de renderizar **User** o la **página principal**, dependiendo del URL.

### User
**Funcionalidad:**

Este componente se encarga de renderizar el **Log In** o el **Sign Up**, depende el URL.

### LogIn
**Funcionalidad:**

Este componente se encarga del FrontEnd del inicio de sesión. La validación se encarga **UserContext**.
### SignUp
**Funcionalidad:**

Este componente se encarga del FrontEnd del registro. La validación se encarga **UserContext**.
### NavBar
**Funcionalidad:**

Este componente se renderiza todo el tiempo. Ofrece acceso al inicio de sesión y al registro pero también muestra cuantos elementos hay en el carrito.

### CartWidget
**Funcionalidad:**

Este componente se encarga de traer del **context** cuantos elementos hay en el carrito. Si no hay ningún elemento, no se renderiza.

### Banner
**Funcionalidad:**

Este componente se encarga de dar feedback al usuario, mostrando donde esta parado dentro de la página. Se renderiza solo en el ItemListContainer.

### Main
**Funcionalidad:**

### ItemListContainer
**Funcionalidad:**

Este componente se encarga de traer de la base de datos los items que están a la venta. Puede traer todos los items, como también puede traerlos filtrados por categoria.

### ItemList
**Funcionalidad:**

Este componente renderiza todos los items del ItemListContainer.

### Item
**Funcionalidad:**

Este componente es basicamente el Item (card), se encarga de mostrar cada Item con sus propiedades correspondientes.

### ItemDetailContainer
**Funcionalidad:**

Este componente trae de la base de datos el Item seleccionado en ItemListContainer (card).

### ItemDetail
**Funcionalidad:**

Este componente se encarga de renderizar el detalle de una Card.

### ItemCount
**Funcionalidad:**

Implementación de un contador para seleccionar unidades disponibles de un producto.

### CartContainer
**Funcionalidad:**

Este componente se encarga de traer del **context** todos los elementos que se hayan agregado al carrito.

### FooterContainer
**Funcionalidad:**

Este componente se renderiza todo el tiempo, contiene el footer.


-------------------------------------------------------------------------------------------------------------------
## Provider UserContext
Manejo de Usuarios junto a Firabase/Auth

### Metodos
**logIn - Se encarga de verificar y validar el inicio de sesión**

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

**SignUp - Se encarga del registro de un nuevo Usuario**

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

**LogOut - Se encarga de cerrar sesión de un Usuario**

    const logOut = async () => {
        await signOut(auth)
        setUsuario({})
        setLoginEmail("")
        setLoginPassword("")
    }

**handleError - se encarga de devolver el error para dar feedback al Usuario**

    const handleError = (err) => {
        if (err === "auth/user-not-found") {
            setError("no existe el usuario");
        } else if (err === "auth/wrong-password") {
            setError("contraseña incorrecta");
        } else if (err === "auth/email-already-in-use") {
            setError("el email ya esta en uso");
        }
    }


#### Librerias Externas
**React-hot-toast**

    npm i react-hot-toast

> Notificaciones para React.

#### **React-router**

    npm i react-router

#### **validator**

    npm i validator

> Una librería para validar string.

#### **Firebase**

    npm i firabase


## Autor

- [@JuaniTrotti](https://github.com/JuaniTrotti)