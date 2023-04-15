import React from "react";
import { Apiwords } from "./context/ContextApi";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Vocabulare from "./components/Vocabulare/Vocabulare";
import "./components/Vocabulare/Vocabulare.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./styles/App.css";

function App() {
  return (
    <Apiwords>
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<Vocabulare />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/vocabulary" element={<Vocabulare />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
     
      <Footer/>
    </div>
    </Apiwords>
  );
}

export default App;