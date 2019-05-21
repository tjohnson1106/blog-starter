import React, { Component } from "react";

export class About extends Component {
  state = {
    pageTitle: "About page"
  };
  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
      </div>
    );
  }
}
