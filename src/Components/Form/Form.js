import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      name: "",
      img: "",
      price: "",
      id: "",
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

  handleReset = e => {
    e.preventDefault();
    this.setState({
      name: "",
      img: "",
      price: 0
    });
  };

  saveUpdate = e => {
    this.props.update(this.props.product.id, this.state);
    this.setState({ editting: false });
  };

  render() {
    let { name, price, img, default_img, editting } = this.state;
    return (
      <div className="greenBox">
        {!editting ? (
          <form>
            <div>
              <img className="addImg" src={img || default_img} alt={name} />
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
              <button onClick={this.handleReset}>Cancel</button>
              <button onClick={this.handleSubmit}>Add to Inventory</button>
            </div>
          </form>
        ) : (
          <form>
            <div>
              <img className="addImg" src={img || default_img} alt={name} />
              <p>
                Image URL:
                <input
                  value={img}
                  name="img"
                  onChange={this.handleChange}
                  placeholder={img}
                />
              </p>
              <p>
                Product Name:
                <input
                  value={name}
                  name="name"
                  onChange={this.handleChange}
                  placeholder={name}
                />
              </p>
              <p>
                Price:
                <input
                  value={price}
                  name="price"
                  onChange={this.handleChange}
                  placeholder={price}
                />
              </p>
            </div>
            <div className="btns">
              <button onClick={this.handleReset}>Cancel</button>
              <button onClick={this.handleSubmit}>Save Changes</button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
