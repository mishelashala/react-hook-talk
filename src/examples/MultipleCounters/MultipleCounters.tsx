import React from "react";
import { Link } from "react-router-dom";

interface IMultipleCountersState {
  count1: number;
  count2: number;
}

export class MultipleCounters extends React.Component<
  {},
  IMultipleCountersState
> {
  state = {
    count1: 0,
    count2: 0
  };

  handleClickIncrement1 = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1
    }));
  };

  handleClickDecrement1 = () => {
    this.setState(prevState => ({
      count1: prevState.count1 - 1
    }));
  };

  handleClickReset1 = () => {
    this.setState(_prevState => ({
      count1: 0
    }));
  };

  handleClickIncrement2 = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1
    }));
  };

  handleClickDecrement2 = () => {
    this.setState(prevState => ({
      count2: prevState.count2 - 1
    }));
  };

  handleClickReset2 = () => {
    this.setState(_prevState => ({
      count2: 0
    }));
  };

  render() {
    return (
      <div className="counter__container">
        <div className="counter__box">
          <p>{this.state.count1}</p>
          <button onClick={this.handleClickDecrement1}>decrement</button>
          <button onClick={this.handleClickReset1}>reset</button>
          <button onClick={this.handleClickIncrement1}>increment</button>
        </div>

        <div className="counter__box">
          <p>{this.state.count2}</p>
          <button onClick={this.handleClickDecrement2}>decrement</button>
          <button onClick={this.handleClickReset2}>reset</button>
          <button onClick={this.handleClickIncrement2}>increment</button>
        </div>

        <Link className="link" to="/advanced-counter-hooks">
          prev example (advanced counter with hooks)
        </Link>

        <Link className="link" to="/multiple-counter-hooks">
          next example (multiple counter with hooks)
        </Link>
      </div>
    );
  }
}
