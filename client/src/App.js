import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
