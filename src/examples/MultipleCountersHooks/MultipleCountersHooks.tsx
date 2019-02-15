import React from "react";
import { Link } from "react-router-dom";

export const MultipleCountersHooks: React.FC<{}> = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div className="counter__container">
      <div className="counter__box">
        <p>{count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>decrement</button>
        <button onClick={() => setCount1(0)}>reset</button>
        <button onClick={() => setCount1(count1 - 1)}>increment</button>
      </div>

      <div className="counter__box">
        <p>{count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>decrement</button>
        <button onClick={() => setCount2(0)}>reset</button>
        <button onClick={() => setCount2(count2 - 1)}>increment</button>
      </div>

      <Link className="link" to="/multiple-counter">
        prev example (multiple counter)
      </Link>

      <Link className="link" to="/reducer-counter-hooks">
        next example (reducer counter with hooks)
      </Link>
    </div>
  );
};
