import React from "react";
import { Link } from "react-router-dom";

interface IFluxStandardAction {
  payload?: any;
  error?: boolean;
  type: string;
}

interface IReducerCounterHooksState {
  count: number;
}

const initialState = (): any => ({
  count: 0
});

// ACTIONS
// @TODO

// REDUCER

const counter = (
  state: IReducerCounterHooksState,
  action: IFluxStandardAction
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return initialState();
  }
};

// ACTIONS
// @TODO

export const ReducerCounterHooks: React.FC = () => {
  const [state, dispatch] = React.useReducer(counter, initialState());

  return (
    <div className="counter__container">
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          increment
        </button>
      </div>
      <Link className="link" to="/multiple-counter-hooks">
        prev example (multiple counters with hooks)
      </Link>
      <Link className="link" to="/effects">
        next example (effects)
      </Link>
    </div>
  );
};
