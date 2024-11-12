import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [ 
  { 
    name: "Focaccia", 
    ingredients: "Bread with italian olive oil and rosemary", 
    price: 6, 
    photoName: "pizzas/focaccia.jpg", 
  }, 
  { 
    name: "Pizza Margherita", 
    ingredients: "Tomato and mozarella", 
    price: 10, 
    photoName: "pizzas/margherita.jpg", 
  }, 
  { 
    name: "Pizza Spinaci", 
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese", 
    price: 12, 
    photoName: "pizzas/spinaci.jpg", 
  }, 
  { 
    name: "Pizza Funghi", 
    ingredients: "Tomato, mozarella, mushrooms, and onion", 
    price: 12, 
    photoName: "pizzas/funghi.jpg", 
  }, 
  { 
    name: "Pizza Salamino", 
    ingredients: "Tomato, mozarella, and pepperoni", 
    price: 15, 
    photoName: "pizzas/salamino.jpg", 
  }, 
  { 
    name: "Pizza Prosciutto", 
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese", 
    price: 18, 
    photoName: "pizzas/prosciutto.jpg", 
  }, 
]; 

function Header() {
  return (
  <div className="title">
    <h1 style={{color: "#004e50", fontSize: "48px", transform: "uppercase"}}>Yee Mon's Pizza Co.</h1>
  </div>
  );
}

const PizzaItem = ({ name, ingredients, price, photoName }) => { 
  return ( 
    <div className="box">
      <img className="img" src={photoName} alt={name}/> 
      <h3 className="pizzah3">{name}</h3> 
      <p className="pizzap">{ingredients}</p> 
      <p className="pizzap">Price: ${price.toFixed(2)}</p> 
    </div> 
  ); 
}; 

function Pizza() { 
  return ( 
    <div> 
      {pizzaData.map((pizza, index) => ( 
        <PizzaItem 
          key={index} 
          name={pizza.name} 
          ingredients={pizza.ingredients} 
          price={pizza.price} 
          photoName={pizza.photoName} 
        /> 
      ))} 
    </div> 
  ); 
} 

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour > 10 && hour < 22 ? true : false;
    return (
      <div>
        <footer className="footer">
            {isOpen ? "We're currently open!": "Sorry, we're closed."}
        </footer>
        
      </div>
    );
}

function Button() {
  return (
    <div>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <h3 className="menutext">Authetic Italian cuisine, all from our stone oven</h3>
      <Pizza />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);