import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";



function App() {
  
  return (
    <div className="main">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>

  );
}

export default App;
