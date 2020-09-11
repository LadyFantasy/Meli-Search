import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";
import "./index.scss"

function List(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getItems = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=seinfeld`);

    console.log(getItems.data.results)
    setItems(getItems.data.results);
  }

  return (
    <div className="list-container">
      {items
        .filter(item => {
          return item.title.toLowerCase().includes(props.searchParam.toLowerCase());
        })
        .map((item, key) => {
          return <Item title={item.title} img={item.thumbnail} price={item.price} key={item.id ? item.id : key} />;
        })}
    </div>
  );
}

export default List;
