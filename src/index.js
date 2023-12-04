// First thing that we have to write is this two imports.
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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
    <div className="container">
      <Header />

      <Menu />

      <Footer />
    </div>
  ); 
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Here, if the value of the props are strings, we can directly write them into the quotation but for it to be not a string we have to use JS mode as we did in the price prop */}

      <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/>

      <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='pizzas/funghi.jpg' price={12}/>

    </main>
  );
}

// Can also use arrow functions
const Pizza = (props) => {
  return (
    <div className="pizza">
      {/* img tag must have alt prop as per eslint rule */}
      <img src={props.photoName} alt={props.name} />
      <div>  
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // A trial but not good 
  // if(hour >= openHour && hour <= closeHour) alert("We're currently open!"); else alert("Sorry, we're closed");

  return <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open</footer>
  // Just returning an element using the createElement method to show you how bad of an idea it is.
  // return React.createElement('footer', null, "We're currently open!");
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
