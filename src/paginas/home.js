import React, { useEffect, useState } from "react";

//importo componentes
import Buscador from "../componentes/buscador";
import ListaTragos from "../componentes/listaTragos";

//importo el HOOK personalizado para realizar la busqueda
import buscaTragos from "../interactuarAPI/buscarTragos";

//TODO: Revisar TODO de buscarTragos.js
//TODO: Implementar la busqueda y armado del array con un hook personalizado
//TODO: Como implementar el hook armado en buscarTragos.js

const Home = () => {
  /*El estado de buscador es la entrada que entra desde buscador
  y lo uso para pasar a la lista como tiene que filtrar lo que muestra*/
  const [buscador, setBuscador] = useState("");
  const [resultadoListaTragos, setResultadoListaTragos] = useState([]);
  const [buscar, setBuscar] = useState(true);

  useEffect(() => {
    if (buscar) {
      buscaTragos(buscador).then((res) => {
        setResultadoListaTragos(res);
        console.log(res);
      });
      setBuscar((prevState) => !prevState);
    }
  }, [buscador, buscar]);

  return (
    <div>
      <Buscador setBuscador={setBuscador} setBuscar={setBuscar} />
      <ListaTragos
        buscador={buscador}
        resultadoListaTragos={resultadoListaTragos}
      />
    </div>
  );
};

export default Home;
