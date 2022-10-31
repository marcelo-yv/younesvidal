import React from 'react';
import { Link } from 'react-router-dom';
import Cartwidget from './ComponentNavbar/Cartwidget';

const Navbar = () => {
    return (
        <>
            <h5 className='navbar-envios'>Envíos Sin cargo - Compras Mayores a $10.000</h5>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}><img className='navbar-logo' src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/logo.jpeg?alt=media&token=2c3f9925-f746-4cbc-b342-029c244a1e21' alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Contacto'}>Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Nosotros'}>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/category/1'}>Vinos</Link></li>
                                    <li><Link className="dropdown-item" to={'/category/2'}>Cervezas</Link></li>
                                    <li><Link className="dropdown-item" to={'/category/3'}>Bebidas Blancas</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to={'/category/4'}>Sección Regalería</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div>
                           <Cartwidget/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
