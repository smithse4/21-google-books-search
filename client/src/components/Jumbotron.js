import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbo jumbotron-fluid" style ={{backgroundColor: "#E2B4BD", margin: 10, height: 170}}>
      <div className="container">
        <br></br>
        <h1 className="display-4 justify-content-center" style ={{color: "white", textAlign: "center"}}>Google Books Search</h1>
        <p className="lead justify-content-center" style ={{color: "white", textAlign: "center"}}>
          Search for and Save Books of Interest
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
