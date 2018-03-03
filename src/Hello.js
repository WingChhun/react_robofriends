import React, { Component } from "react";

import "./Hello.css";

class Hello extends Component {
  //return html
  render() {
    return (
      <div className="f1 tc">
        <h1> Hello </h1>
        <p>{this.props.greeting}</p>
      </div>
    ); //end return
  } //end render function
}

//export back to index.js
export default Hello;
