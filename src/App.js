import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Media from "react-media";
import Index from "./components/Index";
import Navigation from "./components/navigation/Navigation";
import NavigationMobile from "./components/navigation/NavigationMobile";


const App = () => {
  const [currentSec, setCurrentSec] = useState("0");
  const handleCurrentSection = (id) => {
    setCurrentSec(id);
    console.log(id)
  }

  return (
    <div>
      <BrowserRouter>
        <Media
          queries={{
            mobile: "(max-width: 750px)",
            webbrowser: "(min-width: 751px)"
          }}
        >
          {matches => (
            <>
              {matches.mobile && (
                <NavigationMobile />
              )}
              {matches.webbrowser && (
                <Navigation cSection={currentSec} />
              )}
            </>
          )}
        </Media>

        <Switch>
          <Route path="/" exact render={(props) => <Index {...props} checkCurrentSection={handleCurrentSection} />} />
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
