import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      price: "",
      default_img:
        "https://www.daviskarate.com/wp-content/uploads/2017/04/default-image.jpg"
    };
  }

  handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.addProduct(this.state);
    this.setState({
      name: "",
      img: "",
      price: ""
    });
  };

  handleReset = () => {
    this.setState({
      name: "",
      img: "",
      price: 0
    });
  };

  render() {
    let { name, price, img, default_img } = this.state;
    return (
      <div className="greenBox">
        <form>
          <div>
            <img src={img || default_img} alt={name} />
            <p>
              Image URL:
              <input value={img} name="img" onChange={this.handleChange} />
            </p>
            <p>
              Product Name:
              <input value={name} name="name" onChange={this.handleChange} />
            </p>
            <p>
              Price:
              <input
                value={price}
                name="price"
                onChange={this.handleChange}
                placeholder="0"
              />
            </p>
          </div>
          <div className="btns">
            <button
              onClick={this.handleReset}
              // type="reset" value="reset"
            >
              Cancel
            </button>
            <button onClick={this.handleSubmit}>Add to Inventory</button>
          </div>
        </form>
      </div>
    );
  }
}
