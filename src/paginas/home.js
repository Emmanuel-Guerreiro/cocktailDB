import React, { useEffect, useState } from "react";

//importo componentes
import Buscador from "../componentes/buscador";
import ListaTragos from "../componentes/listaTragos";

//importo funciones varias
import buscaTragos from "../funciones/buscarTragos";
import filtrarTragos from "../funciones/filtrarTragos";

//TODO: Revisar TODO de buscarTragos.js
//TODO: Implementar la busqueda y armado del array con un hook personalizado
//TODO: Como implementar el hook armado en buscarTragos.js

const Home = () => {
  /*El estado de buscador es la entrada que entra desde buscador
  y lo uso para pasar a la lista como tiene que filtrar lo que muestra*/
  const [buscador, setBuscador] = useState("");
  const [resultadoListaTragos, setResultadoListaTragos] = useState([]);
  const [listaNoMotrar, setListaNoMostrar] = useState([]);
  const [buscar, setBuscar] = useState(true);

  useEffect(() => {
    /*este primer pedazo se encarga de pedir los datos a la API, por lo que solo
    necesita el flag de buscar y usa, dentro de la funbcion de busqueda la primnera letra */
    if (buscar) {
      buscaTragos("nombre", buscador).then((res) => {
        setListaNoMostrar(res);
      });
      setBuscar((prevState) => !prevState);
    }
    if (buscador.length === 0) {
      setResultadoListaTragos(listaNoMotrar);
    } else {
      setResultadoListaTragos(filtrarTragos(listaNoMotrar, buscador));
    }
  }, [buscador, buscar, listaNoMotrar]);

  return (
    <div className="w-100 d-flex justify-content-center flex-wrap">
      <Buscador setBuscador={setBuscador} setBuscar={setBuscar} />
      <ListaTragos
        buscador={buscador}
        resultadoListaTragos={resultadoListaTragos}
      />
    </div>
  );
};

export default Home;
