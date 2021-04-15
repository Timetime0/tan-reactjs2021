import React, { Component } from "react";
import Model from "./Model";

export default class Glasses extends Component {
  state = {
    image: "./img/glassesImage/v9.png",
  };

  handleOnclick = (e) => {
     let hinhAnhUpDate = `./img/glassesImage/v${e.target.name}.png`
     this.setState({
         image:hinhAnhUpDate
     })
};
  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <Model hinhAnh={this.state.image} />
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              <div className="col-3">
                <button
                  name="1"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="1"
                    src="./img/glassesImage/v1.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="2"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="2"
                    src="./img/glassesImage/v2.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="3"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="3"
                    src="./img/glassesImage/v3.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="4"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="4"
                    src="./img/glassesImage/v4.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="5"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="5"
                    src="./img/glassesImage/v5.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="6"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="6"
                    src="./img/glassesImage/v6.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="7"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="7"
                    src="./img/glassesImage/v7.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="8"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="8"
                    src="./img/glassesImage/v8.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  name="9"
                  className="btn btn-outline-secondary"
                  onClick={this.handleOnclick}
                >
                  <img
                    name="9"
                    src="./img/glassesImage/v9.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
