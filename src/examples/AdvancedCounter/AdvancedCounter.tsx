import React from "react";
import { Link } from "react-router-dom";

interface IAdvancedCounterState {
  count: number;
}

export class AdvancedCounter extends React.Component<
  {},
  IAdvancedCounterState
> {
  state = {
    count: 0
  };

  handleClickIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  handleClickDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  handleClickReset = () => {
    this.setState(_prevState => ({
      count: 0
    }));
  };

  render() {
    return (
      <div className="counter__container">
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.handleClickDecrement}>decrement</button>
          <button onClick={this.handleClickReset}>reset</button>
          <button onClick={this.handleClickIncrement}>increment</button>
        </div>

        <Link className="link" to="/counter-hooks">
          prev example (counter with hooks)
        </Link>

        <Link className="link" to="/advanced-counter-hooks">
          next example (advanced counter with hooks)
        </Link>
      </div>
    );
  }
}
