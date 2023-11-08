import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import LoginP from "./pages/LoginP";
import HomeP from "./pages/HomeP";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/Login" element={<LoginP />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
