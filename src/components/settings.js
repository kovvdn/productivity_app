import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";

import { ListGroup, Form, Row, Col, Button } from "react-bootstrap";

import { DeleteButton } from "./styles/customButtons";

import products from "../products";

class Settings extends Component {
  state = {
    selectedProduct: null
  };

  deleteItem = product => {
    this.props.updateProductList(
      this.props.products.filter(item => item !== product)
    );
  };

  handleSelect = product => {
    this.setState({ selectedProduct: product });
  };

  handleForm = e => {
    e.preventDefault();
    if (
      !this.state.selectedProduct ||
      this.props.products.some(
        item => item.label === this.state.selectedProduct.label
      )
    ) {
      return;
    }
    this.props.updateProductList([
      ...this.props.products,
      this.state.selectedProduct
    ]);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleForm}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Добавить продукцию:
            </Form.Label>
            <Col sm={7}>
              <Select
                options={products}
                value={this.state.selectedProduct}
                onChange={this.handleSelect}
                placeholder="Выбрать..."
              />
            </Col>
            <Col sm={2}>
              <Button type="submit">Добавить</Button>
            </Col>
          </Form.Group>
        </Form>

        <ListGroup>
          {this.props.products.map(
            item =>
              item && (
                <StyledItem key={item.label}>
                  <span>{item.label}</span>
                  <DeleteButton
                    title="Удалить"
                    onClick={() => this.deleteItem(item)}
                  />
                </StyledItem>
              )
          )}
        </ListGroup>
      </>
    );
  }
}

export default Settings;

const StyledItem = styled(ListGroup.Item)`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;
