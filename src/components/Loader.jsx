import React, { Component } from "react";
import "./components.scss";

class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img src='/assets/dino.gif' alt='' />
      </div>
    );
  }
}

export default Loader;
