import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Media from "react-media";

import Index from "./components/Index";
import Navigation from "./components/navigation/Navigation";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Media
          queries={{
            small: "(max-width: 374px)",
            notSmall: "(min-width: 751px)"
          }}
        >
          {matches => (
            <>
              {/* leave this here temporarily */}
              {/* {matches.small && (
                    
                  )} */}
              {matches.notSmall && (
                <Navigation />
              )}
            </>
          )}
        </Media>

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
