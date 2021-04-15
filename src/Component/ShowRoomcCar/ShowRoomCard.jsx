import React, { Component } from "react";

export class ShowRoomCard extends Component {

  // car : './img/car/products/red-car.jpg' : khong chay lai render


   constructor(props){
      super(props)
      this.state = {
        car : './img/car/products/red-car.jpg'
      }
   }
   
    handleChangeColor = (color) => {
        this.setState({
          car: `./img/car/products/${color}-car.jpg`
        })
        console.log(color)
    }

  render() {
    return (
      <div>
        <section className="show-room p-5 text-danger">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button className="btn" onClick={()=>{this.handleChangeColor('black')}}>
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick={()=>{this.handleChangeColor('red')}}>
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick={()=>{this.handleChangeColor('silver')}}>
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick={()=>{this.handleChangeColor('steel')}}>
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <div className="car mt-2">
              <img
                className="img-thumbnail"
                src={this.state.car}
                alt="hinh"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowRoomCard;
