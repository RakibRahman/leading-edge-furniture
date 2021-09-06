import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.querySelector("#root").classList.add("dark");
    } else {
      document.querySelector("#root").classList.remove("dark");
    }
  }, [darkMode]);
  const toggleHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <Router>
        <Navbar toggleDarkMode={darkMode} clickHandler={toggleHandler} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
