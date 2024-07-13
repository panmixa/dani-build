// src/App.js
import React from 'react';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainRoof from "./components/content/main";
import MainFacades from "./components/content/MainFacades";

function App() {

  return (
      <div className="App">
          <Header/>
          <MainFacades/>
          <Footer/>
      </div>
  );
}

export default App;

