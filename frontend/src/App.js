import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';   
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'; 

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
      <BrowserRouter>
    <div className = "grid-container">
            <header className = "header">    
                <div className = "brand">
                    <button onClick = {openMenu}> 
                        &#9776;
                    </button>
                    <Link to = "/"> Pusph Art </Link>
                </div>
                <div className = "header-links">
                    <a href = "cart.html">Cart</a>
                    <a href = "signin.html"> Sign In</a>
                </div>
            </header>
            <aside className = "sidebar">
                <h3> Sort By Themes </h3>
                <button className = "sidebar-close-button" onClick = {closeMenu}> x </button>
                <ul>
                    <li>
                        <a href = "index.html"> Nature </a>
                    </li>

                    <li>
                        <a href = "index.html"> Religion </a>
                    </li>

                    <li>
                        <a href = "index.html"> Abstract Figures </a>
                    </li>
                </ul>
            </aside>
            <main className = "main">
                <div className = "content">
                    <Route path = "/product/:id" component = {ProductScreen} />
                    <Route path = "/" exact = {true} component = {HomeScreen} />
                </div>

            </main>
            <footer className = "footer">
                All right reserved | Pushp Art Collection 2020
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;