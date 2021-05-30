import React from "react";
import { Route, Switch } from "react-router";
import { BookingScreen, LoginScreen } from "../../screens";

export const Layout = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/booking" exact component={BookingScreen} />
      <Route path="/" exact component={LoginScreen} />
      <Route path="**" exact component={LoginScreen} />
    </Switch>
  );
};
