// First thing that we have to write is this two imports.
import React from "react";
import ReactDOM from "react-dom/client";

// Components are actually function which return renderable HTML, just like this App component
function App() {
  return <h1>Hello React!!!</h1>
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
