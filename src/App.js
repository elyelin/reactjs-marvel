import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Search } from "./components/Navbar/Navbar";
//import { CardPhoto } from "./components/CardPhoto/styles";
import { List } from "./components/API/api";
import { ListOfPhotos } from "./components/ListOfPhotos";

function App() {
  return (
    <>
      <GlobalStyles />
      <Search />
      <List />
    </>
  );
}

export default App;
