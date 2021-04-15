import React, { Component } from "react";
import { Card } from "./Card";

export class CardList extends Component {
  render() {
    return (
      <div className="row">
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}

export default CardList;
