import React from "react";
import Chat from "./container/Chat";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
