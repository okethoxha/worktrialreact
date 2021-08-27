import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCustomer from "./pages/addCustomer";
import Home from "./pages/home";
import Products from "./pages/products";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-customer" component={AddCustomer} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </>
  );
};

export default App;
