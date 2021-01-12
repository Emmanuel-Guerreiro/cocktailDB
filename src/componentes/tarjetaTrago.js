import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import la funcion que se encarga de buscar los datos de la API
import buscaTragos from "../funciones/buscarTragos";

const TarjetaTrago = () => {
  const [datos, setDatos] = useState([]);
  const [buscar, setBuscar] = useState(true);

  const { id } = useParams();

  var content = <p>Loading</p>;
  useEffect(() => {
    if (buscar) {
      buscaTragos("id", id).then((res) => {
        setDatos(res);
      });
      setBuscar((prevState) => !prevState);
    }
    content = (
      <div className="card mb-3">
        <img className="card-img-top" src="..." alt="hola" />
        <div className="card-body">
          <h5 className="card-title">123</h5>
          <h2 className="card-title">titulo</h2>
          <p className="card-text"></p>
        </div>
      </div>
    );
    console.log(datos);
  }, [buscar, datos, id]);

  return <div>{content}</div>;
};

export default TarjetaTrago;
