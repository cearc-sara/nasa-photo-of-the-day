import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Components/header"
import Footer from "./Components/footer"
import Images from "./Photos/images"
import Text from "./Text/text"

import "./App.css";

function App() {






  
  return (
    <div className="App">
      <Header />
      <Footer />
      <Images />
      <Text />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
