import React from "react";
import "./App.css";
import Header from "./components/MainHeader";
import Chat from "./container/Chat";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header name={"Logo"}/>
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
