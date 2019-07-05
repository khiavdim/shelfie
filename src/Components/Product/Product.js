import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product.name,
      price: props.product.price,
      img: props.product.img,
      id: props.product.id,
      default_img:
        "https://www.daviskarate.com/wp-content/uploads/2017/04/default-image.jpg"
    };
  }

  handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    let { img, name, price, default_img, id } = this.state;
    let { deleteProduct } = this.props;
    return (
      <div className="productCard">
        <img className="displayImg" src={img || default_img} alt={name} />
        <div className="productInfo">
          <div className="info">
            <p>{name}</p>
            <p>${price}</p>
          </div>
          <div className="modify">
            <button className="productBtns" onClick={() => deleteProduct(id)}>
              Delete
            </button>
            <button className="productBtns">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
