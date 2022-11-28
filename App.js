// inside src/App.js
// Replace previous code with this.

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loginpage from "./Components/login"
import Registerpage from "./Components/register"

function App() {
 
  
  return (
    <>
      <BrowserRouter>
    
    <Routes>
    
    <Route exact path="/" element={<Loginpage/>}/>
    <Route exact path="/register" element={<Registerpage/>}/>
    </Routes>
  </BrowserRouter>

    </>
  );
}
export default App;
