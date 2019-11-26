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
          {/* <Route path="#about_container" component={About} />
          <Route path="#team_container" component={Partners} /> */}
          <Route path="#press_container" component={PressList} />
          {/* <Route path="#contact_container" component={Contact} /> */}
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
