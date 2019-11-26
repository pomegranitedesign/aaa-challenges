import React from "react";
import { Switch, Route } from "react-router-dom";

import { Blank, Test } from "./Pages";

export default props => {
  return (
    <Switch>
      <Route exact path="/" component={Blank} />
      <Route path="/test" component={Test} />
    </Switch>
  );
};
