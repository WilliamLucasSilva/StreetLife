import React from 'react';
import './App.css';
import './reset.css'

import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Projects } from "./components/Projects";
import { Donate } from "./components/Donate"
import { Credits } from "./components/Credits";

 

function App() {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Projects/>
      <Donate/>
      <Credits/>
    </div>
  );
}

export default App;
