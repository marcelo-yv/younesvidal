import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProducto } from "../Utils/firebase";


const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProducto(id).then(prod => {
      setProducts(prod)
    })

    },[]);

    if (products.length != 0) {
  return (
    <>
    <ItemDetail pro={products}/>
    </>
  );
}};

export default ItemDetailContainer;
