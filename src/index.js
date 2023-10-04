import React from "react";
import ReactDom from "react-dom/client";

import {Posts} from './Posts'

const root = ReactDom.createRoot(document.getElementById("root"));

function Write(props) {
  return <h1>Uso de fetch</h1>;
}

root.render(
  <>
    <Write/>
    <Posts/>
  </>
);
