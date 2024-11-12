import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
  <div className="title">
    <h1 style={{color: "#004e50", fontSize: "48px", transform: "uppercase"}}>Yee Mon's Pizza Co.</h1>
  </div>
  );
}

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Spinach Pizza" />
//       <h3>Spinach Pizza</h3>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//       <p>10</p>
//     </div>
//   );
// }

function Pizza(props) {
  return (
    <div className="box">
      <img className="img"src={props.img}/>
      <h3 className="pizzah3">{props.name}</h3>
      <p className="pizzap">{props.description}</p>
      <p className="pizzap">{props.price}</p>
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
      <Pizza img="\pizzas\focaccia.jpg" name="Focaccia" description="Bread with italian olive oil and rosemary" price="Price: $6"/>
      <Pizza img="\pizzas\margherita.jpg" name="Pizza Margherita" description="Tomato and mozarella" price="Price: $10"/>
      <Pizza img="\pizzas\spinaci.jpg" name="Pizza Spinaci" description="Tomata, mozarella, spinach, and ricotta cheese" price="Price: $12"/>
      <Pizza img="\pizzas\funghi.jpg" name="Pizza Funghi" description="Tomato, mozarella, mushrooms, and onion" price="Price: $12"/>
      <Pizza img="\pizzas\salamino.jpg" name="Pizza Salamino" description="Tomato, mozarella, and pepperoni" price="Price: $15"/>
      <Pizza img="\pizzas\prosciutto.jpg" name="Pizza Prosciutto" description="Tomato, mozarella, ham, aragula, and burrata cheese" price="Price: $18"/>
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