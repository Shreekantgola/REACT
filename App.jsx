import React from "react";
import Menu from "./Menu";
import GroupBtn from "./GroupBtn";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Footer from "./Footer";
const App = () => {
  const Time = new Date().toLocaleTimeString();
  return (
    <>
      <div className="box">
        <h1 className="Heading text-center alert-warning">
          <Menu />
          <big className="Big ">
            <code>Don't Move</code> Watch Movie {Time}
          </big>
          <GroupBtn />
        </h1>
        <Carousel />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
