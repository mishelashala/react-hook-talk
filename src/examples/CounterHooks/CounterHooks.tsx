import React from "react";
import { Link } from "react-router-dom";

export const CounterHooks: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter__container">
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
      <Link className="link" to="/counter">
        prev example (counter)
      </Link>
      <Link className="link" to="/advanced-counter">
        next example (advanced counter)
      </Link>
    </div>
  );
};
