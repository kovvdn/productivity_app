import React, { Component } from "react";

const withStorage = Comp =>
  class extends Component {
    state = {
      products: []
    };

    componentDidMount() {
      const products = localStorage.getItem("products");
      if (products) {
        this.setState({ products: JSON.parse(products) });
      }
    }

    saveToStorage = data => {
      localStorage.setItem("products", JSON.stringify(data));
      this.setState({ products: data });
    };

    render() {
      return (
        <Comp
          data={this.state.products}
          updateStorage={this.saveToStorage}
          {...this.props}
        />
      );
    }
  };

export default withStorage;
