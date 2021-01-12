import React from "react";
import { Link, useParams } from "react-router-dom";

//Importo componentes
import TarjetaTrago from "../componentes/tarjetaTrago";

const TragoIndividual = () => {
  const bootstrapStyle = "shadow p-3 mb-5 bg-white rounded";
  let { id } = useParams();

  return (
    <div className="d-flex flex-column justify-content-center">
      <TarjetaTrago tragoId={id} />
      <Link to="/">
        <button id="boton-vuelta" className={`${bootstrapStyle}`}>
          <span>Back home</span>
        </button>
      </Link>
    </div>
  );
};

export default TragoIndividual;
