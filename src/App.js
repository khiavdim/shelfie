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
      price: "",
      id: ""
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

  deleteProduct = id => {
    axios
      .delete(`/api/inventory/${id}`)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log("Could not delete", err));
  };

  render() {
    let { products, img, name, price, id } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="bottom">
          <Dashboard
            products={products}
            img={img}
            name={name}
            price={price}
            deleteProduct={this.deleteProduct}
            id={id}
          />
          <Form products={products} addProduct={this.addProduct} />
        </div>
      </div>
    );
  }
}

export default App;
