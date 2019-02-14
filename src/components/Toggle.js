import { Component } from "react";

class Toggle extends Component {
  state = {
    isOn: false
  };
  toggle = () => {
    this.setState({ isOn: !this.state.isOn });
  };
  render() {
    return this.props.children({ isOn: this.state.isOn, toggle: this.toggle });
  }
}

export default Toggle;
