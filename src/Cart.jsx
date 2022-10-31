//import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {
    const { carrito, AddCart, DeletCart, clear, finalcompra } = useContext(CartContext)
    const [localCart, setlocalCart] = useState([]);


    useEffect(() => {

        const elementCart = carrito.map(producto =>
            <tr  key={producto.id}>
                <th  scope="row"><img  className='imgage-cart' src={producto.img} alt="" /></th>
                <th >{producto.nombre}</th>
                <td>$ {producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>$ {producto.precio * producto.cantidad}</td>
                <td><button className='btn btn-dark' onClick={() => DeletCart(producto)}>Eliminar</button></td>
            </tr>
        )
        setlocalCart(elementCart)

    }, [carrito]);

    if (carrito.length != 0) {
        return (
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Sub-Total</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {localCart}
                </tbody>
            </table>
            <div className='text-center'>
            <button className='btn btn-danger margin-btn' onClick={() => finalcompra(carrito)}>Comprar</button>
            <button className='btn btn-danger margin-btn' onClick={() => clear(carrito)}>Vaciar Carrito</button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className='text-center margin-mc'>
            <img className='cart-vacio' src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/carritovacio.jpeg?alt=media&token=55a173b8-c2a8-4b9f-bda5-a26f6352d2fd' alt="" />
            </div>
            </>
        )
    }
}

export default Cart;
