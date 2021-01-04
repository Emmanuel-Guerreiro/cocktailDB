import React, { useState } from "react";

//importo componentes
import Buscador from "../componentes/buscador";
import ListaTragos from "../componentes/listaTragos";

/*TODO: preguntar a beroch como es mas conveniente realizar la busqueda:
 **Si sacar y filtrar aca
 **Si filtrar y buscar con lo filtrado*/

const Home = () => {
  /*El estado de buscador es la entrada que entra desde buscador
  y lo uso para pasar a la lista como tiene que filtrar lo que muestra*/
  const [buscador, setBuscador] = useState("");

  /*Aca hago el fetch de los tragos a la API y lo paso como una prop a
  la Lista de Tragos para que ahi se filtre */

  const buscaTragos = async () => {
    const tragos = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const tragosFormateado = await tragos.json();
    console.log(tragosFormateado);
  };

  buscaTragos();

  return (
    <div>
      <Buscador setBuscador={setBuscador} />
      <ListaTragos buscador={buscador} />
    </div>
  );
};

export default Home;
