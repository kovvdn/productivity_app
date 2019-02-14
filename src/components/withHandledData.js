import React, { Component } from "react";

const withHandledData = Comp =>
  class extends Component {
    state = {
      output: [],
      productivity: 0,
      worktime: 480
    };

    clearOutput = () => {
      this.setState({ output: [] });
    };

    componentDidUpdate(prevProps, prevState) {
      if (prevState.output.length !== this.state.output.length) {
        this.setState({
          productivity: Math.round(
            this.state.output.reduce((acc, { productivity }) => {
              return acc + productivity;
            }, 0)
          )
        });
      }
    }

    handleData = ({
      product: { label, value },
      workers,
      manufactured,
      downtime
    }) => {
      const { output, worktime } = this.state;

      const requiredRate = Math.round(
        ((worktime - downtime) / value) * workers
      );
      const percentage =
        Math.round((manufactured / requiredRate) * 100 * 100) / 100;

      this.setState({
        output: [
          ...output,
          {
            id: Date.now(),
            label,
            requiredRate,
            workers,
            manufactured,
            downtime,
            productivity: percentage
          }
        ]
      });
    };

    deleteOutputItem = id => {
      this.setState({
        output: this.state.output.filter(data => data.id !== id)
      });
    };

    render() {
      return (
        <Comp
          {...this.props}
          {...this.state}
          handleData={this.handleData}
          deleteOutputItem={this.deleteOutputItem}
          clearOutput={this.clearOutput}
        />
      );
    }
  };

export default withHandledData;
