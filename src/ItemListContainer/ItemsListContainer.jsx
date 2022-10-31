import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../Utils/firebase";
import ItemsList from "./ItemsList";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);
  const {Id} = useParams();

  useEffect(() => {
    getProductos().then(product =>{
      if(Id){
        setProducts(product.filter(productos => productos[1].categoria === parseInt(Id)))
      }else{
        setProducts(product)
      }  
    })
    },[Id]);

  return (
    <>
          <ItemsList products={products} />
    </>
  );
};

export default ItemsListContainer;
