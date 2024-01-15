import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement( 
    "div",
    {id:"parent"},[
    React.createElement("div",{ id:"child1" }, [
        React.createElement("h1",{id:"heading"}, "Hello World Nested React h1"),
        React.createElement("h2",{id:"heading"}, "Sibling h2"),
    ]),
    React.createElement("div",{ id:"child2" }, [
        React.createElement("h1",{id:"heading"}, "Hello World Nested React h1"),
        React.createElement("h2",{id:"heading"}, "Sibling h2"),
    ]),
]);

//Hello 
// console.log(heading);

// just to avoid this complicated code structure we use JSX



const heading = React.createElement("h1", {id:"heading"}, "Hello React World!");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);
