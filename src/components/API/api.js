import React, { useEffect, useState } from "react";
import { CardPhoto } from "../CardPhoto";

export const List = () => {
  const [hero, setHero] = useState([]);

  function getHero() {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2d78ed127d08121f443c1a6e0e9171e8&hash=1e54ce2dea65016bdd0b85c8526ca01e"
    )
      .then((response) => response.json())
      .then((hero) => setHero(hero.data.results))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    getHero();
  }, []);

  return (
    <div>
      <h1>NOSOTROS</h1>
      <ul>
        {hero.map(({ ...hero }) => (
          <img src={hero.path} />
        ))}
      </ul>
      <CardPhoto data={hero.name} />
    </div>
  );
};

export default List;
{
  /*<ul>
        {data.map((thumbnail, id) => (
          <li key={id}>{thumbnail.extension}</li>
        ))}
      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" />
        </ul>*/
}
/*Listado = () => {
  const UrlMarvel =
    ;
  (UrlMarvel)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export default Listado();
*/
/*const Listado = {
  render: () => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2d78ed127d08121f443c1a6e0e9171e8&hash=1e54ce2dea65016bdd0b85c8526ca01e"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  } 
};
Listado.render();
*/
