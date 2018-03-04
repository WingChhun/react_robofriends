import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="Card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img
          src={`https://robohash.org/${this.props.id}?200x200`}
          alt="Profile"
        />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    ); //end return
  }
}

export default Card;
