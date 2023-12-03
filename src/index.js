// First thing that we have to write is this two imports.
import React from "react";
import ReactDOM from "react-dom/client";

// Data copied from data.js
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


// Components are actually function which return renderable HTML, just like this App component
function App() {
  return (
    <div>
      <h1>Hello React!!!</h1>

      {/* Here reusing the Pizza component */}
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  ); 
}

// Can also use arrow functions
let Pizza = () => {
  return (
    <div>
      {/* img tag must have alt prop as per eslint rule */}
      <img src="pizzas/funghi.jpg" alt="funghi" />
      <h2>Pizza Funghi</h2>
      <p>Tomato, mozarella, mushrooms, and onion</p>
    </div>
  );
}

// Now we use createRoot() method to create a root component in which all our component will render.
// this root component is present in the index.html of public folder that we ger here using the document.getElementById() method.

const root = ReactDOM.createRoot(document.getElementById("root"));

// This will render our App component using the div with id root in the index.html.
root.render(
    // We can wrap the root component i.e. App in the <React.StrictMode> tag to enable the strict mode.
    // The only thing it does is that during development it will render our components twice in order to find certain bugs and also check if we are using outdated parts of the React API.
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
