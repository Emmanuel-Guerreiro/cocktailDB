import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//importo hojas de css
import "./App.css";
import "./estilos/Componentes.css";

//importo componentes
import NavBar from "./componentes/navbar";

//importo paginas
import Home from "./paginas/home";
import About from "./paginas/about";
import TragoIndividual from "./paginas/tragoIndividual";
import Error from "./paginas/error";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id" children={<TragoIndividual />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
