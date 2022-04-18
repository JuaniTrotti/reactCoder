import { db } from './Firebase'
import { collection, addDoc } from 'firebase/firestore'

const ItemGenerator = () => {

  const handleCreate = () => {
      const card = {
          categoria: "Poster",
          id: 20,
          item: {
              desc: "Descripcion del producto",
              image: "",
              name: "obra20",
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