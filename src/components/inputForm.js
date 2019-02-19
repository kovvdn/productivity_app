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
    downtime: 0,
    syllabus: 100
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
          <Col sm="6">
            <Select
              options={this.props.products}
              value={this.state.product}
              onChange={this.handleSelect}
              placeholder="Выберите производимую продукцию"
            />
          </Col>
          <Col sm="2">
            <Form.Control
              name="syllabus"
              type="number"
              value={this.state.syllabus}
              onChange={this.handleInput}
              title="Выработка"
              onFocus={e => this.setState({ [e.currentTarget.name]: "" })}
              onBlur={e =>
                !this.state[e.currentTarget.name] &&
                this.setState({ [e.currentTarget.name]: 100 })
              }
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
                onFocus={() =>
                  this.setState({
                    [item.name]: item.name === "workers" ? 19 : ""
                  })
                }
                onBlur={() =>
                  !this.state[item.name] && this.setState({ [item.name]: 0 })
                }
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
