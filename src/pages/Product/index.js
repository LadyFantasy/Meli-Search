import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import { useParams } from "react-router-dom";

function List(props) {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getItems = await axios.get(`https://api.mercadolibre.com/items/${id}`);

    setProduct(getItems.data);
    console.log(getItems);
    console.log("id", id);
    console.log("product", product);
  }

  return (
    <div className="product-container">
      <div className="item-container">
        <img className="product-img" src={product.thumbnail} />
        <p className="product-title">{product.title}</p>
        <p className="product-price">$ {product.price}</p>
      </div>
    </div>
  );
}

export default List;
