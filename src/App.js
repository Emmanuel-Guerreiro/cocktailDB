import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

//importo hojas de css
import "./App.css";
import "./estilos/Componentes.css";

//importo componentes
import NavBar from "./componentes/navbar";
import TarjetaTrago from "./componentes/tarjetaTrago";

//importo paginas
import Home from "./paginas/home";
import About from "./paginas/about";
import TragoIndividual from "./paginas/tragoIndividual";
import Error from "./paginas/error";

//TODO: borrar el ROUTE de experimentacion
//TODO: ver como trabajar con CSS y bootstrap sin necesidad de !important
//TODO: ESPECIFICIDAD CSS!!!!

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
          <Route path="/cocktail/:id" component={<TarjetaTrago />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
