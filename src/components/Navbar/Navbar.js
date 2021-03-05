import React from "react";
import { Navbar, Input } from "./NavbarStyle";
//import MarvelLogo from "../../images/MarvelLogo.svg";

export const Search = () => {
  return (
    <Navbar>
      <Input placeholder="Buscador" />
    </Navbar>
  );
};

//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2d78ed127d08121f443c1a6e0e9171e8&hash=1e54ce2dea65016bdd0b85c8526ca01e
