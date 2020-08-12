import React, {useState, useEffect} from "react";
import axios from "axios";
import {BASE_URL, API_KEY} from "./constants/index"
import Header from "./components/Header"
import Footer from "./components/Footer"


import "./App.css";

function App() {
  const [imageOfDay, setImageOfDay] = useState(null)
  const [explination, setExplination] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [copyright, setCopyright] =useState('')

  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setTitle(res.data.title)
    })
    .catch(err => {
      debugger
    })
  })
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setDate(res.data.date)
    })
    .catch(err => {
      debugger
    })
  })
 

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res =>{
      setImageOfDay(res.data.url)
    })
    .catch(err => {
      debugger
    })
    
  })
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setExplination(res.data.explanation)
    })
    .catch(err => {
      debugger
    })
  })
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setCopyright(res.data.copyright)
    })
    .catch(err => {
      debugger
    })
  })



  return (

    <div className="App">
      <Header title={title} date={date}/>

      <img src={imageOfDay} alt=''/>
      <p>{explination}</p>
      
      <Footer copyright={copyright}/>
      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
