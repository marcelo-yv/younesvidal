import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';


const ItemDetail = ({ pro }) => {

    const [cantidad, setcantidad] = useState(1);

    const { carrito, AddCart, deletCart } = useContext(CartContext)

    const CantProd = (operacion) => {
        if (operacion === '+') {
            if (cantidad < pro[1].stock)
                setcantidad(cantidad + 1)
        } else {
            if (cantidad > 1)
                setcantidad(cantidad - 1)
        }
    }

    return (
        <div className="card-container">
            <div key={pro[0]} className="card mb-3" style={{ maxWidth: '640px' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={pro[1].img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h5 className="card-title">{pro[1].nombre}</h5>
                            <p className="card-text">{pro[1].detalle}</p>
                            <p className="card-text">Stock: {pro[1].stock}</p>
                            <p className="card-text"><small className="text-muted">${pro[1].precio}</small></p>
                            <div className='card-container'>
                                <button className='btn btn-secondary' onClick={() => CantProd("+")}>+</button>
                                <p>{cantidad}</p>
                                <button className='btn btn-secondary' onClick={() => CantProd("-")}>-</button>
                            </div>
                            <button className='btn btn-danger' onClick={() => AddCart(pro, cantidad)} > Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemDetail;
