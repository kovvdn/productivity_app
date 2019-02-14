import React, { Component } from "react";
import Select from "react-select";

import { Form, Row, Col, Button } from "react-bootstrap";

const inputs = [
  { label: "Количество работников:", type: "number", name: "workers" },
  { label: "Произведено комплектов:", type: "number", name: "manufactured" },
  {
    label: "Простой / Переход на другую продукцию (в минутах):",
    type: "number",
    name: "downtime"
  }
];

class InputForm extends Component {
  state = {
    product: null,
    manufactured: 0,
    workers: 19,
    downtime: 0
  };

  handleSelect = product => {
    this.setState({ product });
  };

  handleInput = e => {
    const { name, value, type } = e.target;
    this.setState({
      [name]: type === "number" && value ? parseFloat(value) : value
    });
  };

  handleForm = e => {
    e.preventDefault();
    if (!this.state.product) return;

    this.props.handleInputData(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleForm}>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Продукция:
          </Form.Label>
          <Col sm="8">
            <Select
              options={this.props.products}
              value={this.state.product}
              onChange={this.handleSelect}
              placeholder="Выберите производимую продукцию"
            />
          </Col>
        </Form.Group>
        {inputs.map(item => (
          <Form.Group key={item.name} as={Row}>
            <Form.Label column sm={4}>
              {item.label}
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type={item.type}
                value={this.state[item.name]}
                name={item.name}
                onChange={this.handleInput}
              />
            </Col>
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    );
  }
}

export default InputForm;
