import React from "react";
import ReactDOM from "react-dom/client";

const test = <p>Hello World!</p>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(test);
