import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img
        src="https://ik.imagekit.io/suhailakhtar039/pizza.jpg?updatedAt=1753284012004"
        alt="It's a pizza"
      />
      <h2>Pizza Spinachi</h2>
      <p>Onion, spinach, oregano, and cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
