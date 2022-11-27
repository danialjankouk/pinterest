import React, { useEffect } from "react";
import { getProducts } from "../api";
import axios from "axios";
const Landing = () => {
const {data} = axios
      .get(getProducts)
      .then((response) => response.data)
      .catch((err) => console.log(err));
      console.log(data);
  return (
    <div>
      {data.map()}
      <img />
      <p></p>
    </div>
  );
};

export default Landing;
