import React, {useState, useEffect} from "react";
import axios from "axios";
import Body from "./body/Body"
import Header from "./components/Header"
import Footer from "./components/Footer"


import "./App.css";

function App() {






  return (
    <div className="App">
      <Header />
      <Footer />
      <Body />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
