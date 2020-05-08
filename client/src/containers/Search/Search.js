import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    search: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
        search: ""
    });
  };


  render() {
    return (
      <>
        <section className="search-container">
          <h4>Book Search</h4>
          <form className="search">
            <div className="form-group">
              <input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                type="text"
                className="search-form"
                placeholder="Book Title"
                id="search"
              />
              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="btn-search"
              >
                Search
              </button>
            </div>
          </form>
        </section>
        <section className="results-container">
            <h4 id="h4-results">Results</h4>
            <div className="results">
                <h5>Title</h5>
                <button className="results-btn">Link</button>
                <button className="results-btn">Save</button>
                <h6>Author</h6>
                <img src="" alt="" className="result-image"/>
                <p>Description</p>
                


            </div>
            <br></br>
        </section>
      </>
    );
  }
}

export default Search;
