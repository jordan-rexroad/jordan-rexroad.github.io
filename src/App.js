import './App.css';
import React from 'react';
import Todo from './components/Todo';
import Navbar from './Navbar';
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  let component;

  switch (window.location.pathname) {
    case "/Todo":
        component = <Todo/> 
      break 
    case "/Contact":
        component = <Contact/>
        break
  }
  return (
    <>
      <Navbar />
       <div className="container">
        <Routes>
          <Route path ="/Todo"element={<Todo/>} />
          <Route path ="/" element={<Todo/>} />
          <Route path='/Contact' element={<Contact/>} />
          </Routes>
       </div> 
    </>
  )
}

export default App


