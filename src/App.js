import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./components/Index";
import PressList from "./components/press/PressList";
import Navigation from "./components/navigation/Navigation";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route>
            <div className="App">
              <h1>Error 404: Page not found</h1>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
