import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object => HTMLElement(after render)
const heading = React.createElement("h1", {id:"heading"}, "Hello React World!");
console.log(heading);

// JSX it is not HTML in js but it HTML-like or XML-like syntax
// React App can be build without using JSX but JSX is Development friendly easy to read code.

const jsxHeading = <h1 id="heading">Hello Explore React</h1>
console.log(jsxHeading);

//Behind the scene both are object only even jsx syntax used to create react element only.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
