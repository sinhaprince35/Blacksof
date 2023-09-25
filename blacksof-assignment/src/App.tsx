import React from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Carousel from "./Component/Carousel";
import "./App.css"; // You can keep this line if you have custom CSS.

function App() {
  return (
    <div className="bg-black v-screen">
      <Header />
      <Main />
      <Carousel />
    </div>
  );
}

export default App;
