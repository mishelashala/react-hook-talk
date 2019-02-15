import React from "react";
import { Link } from "react-router-dom";

interface ICounterState {
  count: number;
}

export class Counter extends React.Component<{}, ICounterState> {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div className="counter__container">
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.handleClick}>increment</button>
        </div>
        <Link className="link" to="/counter-hooks">
          example with hooks
        </Link>
      </div>
    );
  }
}
