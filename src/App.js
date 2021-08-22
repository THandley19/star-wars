import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterSelect from "./compoments/Character-Selection/";
import CharacterBattle from "./compoments/Character-Battle";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterSelect} />
          <Route path="/character-battle" component={CharacterBattle} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
