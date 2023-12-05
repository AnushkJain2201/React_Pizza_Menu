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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Here we are iterating over the pizzaData array using the map function to create as much Pizza element as the element of arrry and we can pass the props in the element dynamically. */}
      {/* <div>
        {pizzaData.map(pizza => <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} />)}
      </div> */}

      {/* Instead of passing all properties of pizza object we pass the pizza object directly and take out the properties of this object inside the component itself. */}

      {/* Here we are checking if pizzaData array is not empty then only we will show the Pizza element */}

      {/* Using ternary operator */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      ) : <p>We're still working on our menu. Please come back later :)</p>}
      
      {/* Using && operator and short circuiting
      {numPizzas > 0 && (
        <ul className="pizzas">
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      )} */}
      
      
      

      {/* Here, if the value of the props are strings, we can directly write them into the quotation but for it to be not a string we have to use JS mode as we did in the price prop */}

      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10}/>

      <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='pizzas/funghi.jpg' price={12}/> */}

    </main>
  );
}

// Can also use arrow functions
const Pizza = (props) => {

  // Using conditional rendering using the multiple returns
  if(props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      {/* img tag must have alt prop as per eslint rule */}
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>  
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
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

  // Now, Conditional rendering with multiple return
  // Here, we are out of return statement so, we can write any JS we want. So, here we can use the if statement

  // Here if the first return donot work due to the condition, it will return the second return statement

  if(!isOpen)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );

    return (
    <footer className="footer">

        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          
          <button className="btn">Order</button>
        </div>


      {/* Now, using ternary operator */}
      {/* {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          
          <button className="btn">Order</button>
        </div>
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>} */}

      {/* Here, we are using the shortcicuiting with the and operator */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          
          <button className="btn">Order</button>
        </div>
      )} */}
    </footer>
  );
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
