import React, { Component } from "react";
import "./Saved.css";

class Saved extends Component {
  state = {
    book: ""
  };
  render() {
    return (
      <>
        <section className="results-container">
          <h4 id="h4-results">Saved Books</h4>
          <div className="results">
            <h5>Title</h5>
            <button className="results-btn">Link</button>
            <button className="results-btn">Save</button>
            <h6>Author</h6>
            <img src="" alt="" className="result-image" />
            <p>Description</p>
          </div>
          <br></br>
        </section>
      </>
    );
  }
}

export default Saved;
