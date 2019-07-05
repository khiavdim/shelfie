import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    let { products, img, name, price, deleteProduct, id, update} = this.props;
    return (
      <div>
        {products.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
              img={img}
              name={name}
              price={price}
              deleteProduct={deleteProduct}
              update={update}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
