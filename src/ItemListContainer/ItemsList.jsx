//import Items from "./Items";
import { Link } from "react-router-dom";


function ItemsList({ products }) {
    return (
        <>
            <div className="card-container">
                {products.map((produ) => (
                    <div key={produ[0]} className="card card-marging" style={{ width: '18rem' }}>

                        <img src={produ[1].img} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">{produ[1].nombre}</h5>
                            <p>${produ[1].precio}</p>
                        </div>
                        <div className="card-body text-center">
                            <button className='btn btn-danger'>
                            <Link to={'/producto/' + produ[0]} className="nav-link">Ver Detalle</Link>
                            </button>
                        </div>
                    </div>
                ))

                }
            </div>
        </>
    );
}

export default ItemsList;
