import React from 'react';
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    return (
        <>
             <Link to={'/cart'}><img src='https://firebasestorage.googleapis.com/v0/b/younesvidal-5143f.appspot.com/o/shoppingcart.png?alt=media&token=4865ac7b-fed2-4058-84df-af0dcd5a885e' alt="" /></Link>
        </>
    );
}

export default Cartwidget;
