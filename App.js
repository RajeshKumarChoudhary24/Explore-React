import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component - Which return some JSX element
const Title = () => {
    return <h1 id="title">Explore-React Title</h1>
};

// If we are returning signgle line then we can write in sigle line this syntax is also valid.
//const Title1 = () => <h1 id="title">Explore-React Title1</h1>;

// Composition of Component - When we use one component inside another is called Composition of componnent.
const HeadingComponent = () => {
    return (<div id="headingcomponent">
        <Title />
        <h1 id="heading">Composition of Title component into Heading Component</h1>
    </div>)
}

console.log(HeadingComponent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
