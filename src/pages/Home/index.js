import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Home() {
  const countries = [
    "Argentina",
    "Bolivia",
    "Chile",
    "Brasil",
    "Paraguay",
    "Perú",
    "Uruguay",
    "México",
    "Ecuador",
    "Colombia",
    "Venezuela"
  ];
  return (
    <div className="container">
      <img className="logo" src="https://blog.newrelic.com/wp-content/uploads/ML2.png" alt="logo Meli"/>
      <div className="countries-container">
        {countries.map((country, key) => {
          return (
            <Link key={key} to={`/search/${country}`}>
              <p className="country">{country}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
