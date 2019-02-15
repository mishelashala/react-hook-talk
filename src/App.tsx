import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Counter,
  CounterHooks,
  AdvancedCounter,
  AdvancedCounterHooks,
  MultipleCounters,
  MultipleCountersHooks,
  ReducerCounterHooks
} from "./examples";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/counter" />} />
        <Route path="/counter" component={Counter} />
        <Route path="/counter-hooks" component={CounterHooks} />
        <Route path="/advanced-counter" component={AdvancedCounter} />
        <Route
          path="/advanced-counter-hooks"
          component={AdvancedCounterHooks}
        />
        <Route path="/multiple-counter" component={MultipleCounters} />
        <Route
          path="/multiple-counter-hooks"
          component={MultipleCountersHooks}
        />
        <Route path="/reducer-counter-hooks" component={ReducerCounterHooks} />
      </Switch>
    </Router>
  );
};

export default App;
