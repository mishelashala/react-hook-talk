import React from "react";
import { Link } from "react-router-dom";

export const AdvancedCounterHooks: React.FC<{}> = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter__container">
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count - 1)}>increment</button>
      </div>

      <Link className="link" to="/advanced-counter-hooks">
        prev example (advanced counter)
      </Link>

      <Link className="link" to="/multiple-counter">
        next example (multiple counters)
      </Link>
    </div>
  );
};
