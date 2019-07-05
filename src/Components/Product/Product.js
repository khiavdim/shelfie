import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product.name,
      price: props.product.price,
      img: props.product.img,
      default_img:
        "https://www.daviskarate.com/wp-content/uploads/2017/04/default-image.jpg"
    };
  }
  render() {
    let { img, name, price, default_img } = this.state;
    return (
      <div>
        <img src={img || default_img} height="200px" width="100px" alt={name} />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    );
  }
}

export default Product;
