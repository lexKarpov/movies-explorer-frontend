import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Login from "../Login/Login";
import React from "react";
import Movies from '../Movies/Movies'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/signup" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        {/*<Route path="/" element={<Main className="page"/>}/>*/}
        <Route path="/" element={<Movies className="page"/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
