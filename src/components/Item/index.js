import React from "react";
import "./index.scss";

function Item(props) {
  const { title, img, price } = props;
  return (
    <div className="container-item">
      <img className="img-item" src={img} />
      <p className="price-item">$ {price}</p>
      <p className="title-item">{title}</p>
    </div>
  );
}

export default Item;
