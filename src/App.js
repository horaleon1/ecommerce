import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import NotFound from "./components/PageNotFound";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact  component={ProductList}/>
          <Route path="/details" exact  component={Details}/>
          <Route path="/cart" exact  component={Cart}/>
          <Route component={NotFound}/>
        </Switch>
      </>
    );
  }
}
