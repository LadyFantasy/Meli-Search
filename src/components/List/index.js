import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";
import "./index.scss"
import { useParams} from "react-router-dom"

function List(props) {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    
    const getItems = await axios.get(`https://api.mercadolibre.com/sites/${id}/search?q=chocolate&limit=16`);

    setItems(getItems.data.results);
    console.log(items)
  }

  return (
    <div className="list-container">
      {items
        .filter(item => {
          return item.title.toLowerCase().includes(props.searchParam.toLowerCase());
        })
        .map((item, key) => {
          return <Item title={item.title} img={item.thumbnail} id={item.id} price={item.price} key={item.id ? item.id : key} />;
        })}
    </div>
  );
}

export default List;
