import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Settings from "./views/Settings.jsx";
import Prayers from "./views/Prayers.jsx";
import Sanctuary from "./components/Sanctuary.jsx";
import Request from "./components/RequestPrayer.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route
          path="/register"
          render={props => <Login {...props} register={true} />}
        />
        <Route path="/settings" component={Settings} />
        <Route path="/prayers" component={Prayers} />
        <Route path="/sanctuary" component={Sanctuary} />
        <Route path="/request" component={Request} />
      </BrowserRouter>
    );
  }
}

export default App;
