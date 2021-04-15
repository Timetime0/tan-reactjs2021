import React, { Component } from "react";
import ProductList from "./ProductList";

export default class Product extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
              <ProductList/>
              <ProductList/>
              <ProductList/>
              <ProductList/>
            </div>
        </section>
      </div>
    );
  }
}
