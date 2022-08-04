import logo from '../../images/header/logo.svg';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Main className="page"/>
      <Footer/>
    </div>
  );
}

export default App;
