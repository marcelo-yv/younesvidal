import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, updateDoc, getDocs, getDoc, } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "younesvidal-5143f.firebaseapp.com",
  projectId: "younesvidal-5143f",
  storageBucket: "younesvidal-5143f.appspot.com",
  messagingSenderId: "819448600134",
  appId: "1:819448600134:web:fe5f7fd40092f4cf071c47"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
  }

  const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
  }

  const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
  }

  const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      nombre: nombre,
      apellido: apellido,
      email: email,
      dni: dni,
      direccion: direccion,
      precioTotal: preTotal
    })
  
    return ordenCompra
  }

  const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
  }


export {getProductos, getProducto, updateProducto, createOrdenCompra, getOrdenCompra}