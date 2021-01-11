import React, { useEffect, useState } from "react";

//importo componentes
import Buscador from "../componentes/buscador";
import ListaTragos from "../componentes/listaTragos";

//importo otras funciones
import buscaTragos from "../interactuarAPI/buscarTragos";

//TODO: Revisar TODO de buscarTragos.js
//TODO: como manejar listaTragos, no parece ser un array si no la devolucion de la promise

const Home = () => {
  /*El estado de buscador es la entrada que entra desde buscador
  y lo uso para pasar a la lista como tiene que filtrar lo que muestra*/
  const [buscador, setBuscador] = useState("");
  const [resultadoListaTragos, setResultadoListaTragos] = useState([]);

  /*Aca hago el fetch de los tragos a la API y lo paso como una prop a
  la Lista de Tragos para que ahi se filtre */

  useEffect(() => {
    //defino la lista de tragos con el valor que devuelve BuscaTragos
    // en funcion del estado del buscador
    if (buscador.length === 3) {
      
      buscaTragos(buscador).then(res => {
        setResultadoListaTragos(res)
      })
      console.log(resultadoListaTragos);
    }
    //Hacer que si buscador.length===0 ponga desde a
  }, [buscador]);

  return (
    <div>
      <Buscador setBuscador={setBuscador} />
      <ListaTragos
        buscador={buscador}
        resultadoListaTragos={resultadoListaTragos}
      />
    </div>
  );
};

export default Home;
