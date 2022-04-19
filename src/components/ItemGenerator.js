import { db } from './Firebase'
import { collection, addDoc } from 'firebase/firestore'

const ItemGenerator = () => {

  const handleCreate = () => {
      const card = {
          categoria: "LineArt",
          id: 2,
          item: {
              desc: "Descripcion del producto",
              image1: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
              image2: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
              image3: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
              name: "LineArt2",
              price: 3000,
              stock: 5,
              size: {
                hieght: 40,
                width: 20
              }
          }
      }

      const itemCollection = collection(db, "juanArtReact")
      const item = addDoc(itemCollection, card)
      item
      .then(()=>console.log("Documento creado"))
      .catch(()=>console.log("error"))
  }

  return (
    <button onClick={handleCreate}> agregar documento</button>
  )
}

export default ItemGenerator