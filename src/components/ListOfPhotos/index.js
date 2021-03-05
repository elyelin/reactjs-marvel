import React from "react";
import { CardPhoto } from "../CardPhoto";
import { List } from "../API/api";

export const ListOfPhotos = ({ data }) => {
  console.log("data1:", data);
  return (
    <div>
      <CardPhoto personaje={data} />
    </div>
  );
};
