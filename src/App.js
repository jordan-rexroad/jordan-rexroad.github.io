import './App.css';
import React from 'react';
import Todo from './components/Todo';
import Navbar from './Navbar';
import Form from "./pages/Contact";
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
          <Route path ="/Todo" element={<Todo/>} />
          </Routes>
       </div> 
       <div className="form">
        <Form/>
        </div>
      
    </>
  )
}

export default App


