import React, {createContext, useState } from 'react';
import { getProducto, updateProducto, createOrdenCompra } from './Utils/firebase';

const CartContext = createContext()

const CartProvider = (props) => {

    const [carrito, setcarrito] = useState([]);

    const AddCart = (prod, cant) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto.id == prod[0])

        if (indice != -1) {
            aux[indice].cantidad = cant
            console.log(indice)

        } else {
            const id = prod[0]
            const x = prod[1]

            const prodCarrito = { id, ...x, cantidad: cant }
            aux.push(prodCarrito)
        }
        setcarrito(structuredClone(aux))

        console.log(carrito)
        
    }

    const DeletCart = (prod) => {
        const aux = carrito;

        let indice = aux.findIndex(producto => producto.id == prod.id)
        aux.splice(indice,1)
        setcarrito(structuredClone(aux))
    }

    const clear = (prod) =>{
        const aux = [];
        setcarrito(structuredClone(aux))  
    }

    const finalcompra = (prod) =>{
        getProducto(prod[0]).then(producto => {
            const x =prod[1]
            x.stock -= carrito.cant
            updateProducto(prod[0], x)
        })

        createOrdenCompra()

    }

    return (
        <>
                <CartContext.Provider value={{carrito, AddCart, DeletCart, clear, finalcompra}}>
                    {props.children}
                </CartContext.Provider>
        </>
    );
}

export  {CartContext, CartProvider};
