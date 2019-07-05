import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      img: "",
      name: "",
      price: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log("Error from server", err);
      });
  }

  addProduct = newProduct => {
    let { name, img, price } = newProduct;
    axios
      .post("/api/inventory", {
        name,
        img,
        price
      })
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log("Error from server", err));
  };

  render() {
    let { products, img, name, price } = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard products={products} img={img} name={name} price={price} />
        <Form products={products} addProduct={this.addProduct} />
      </div>
    );
  }
}

export default App;
