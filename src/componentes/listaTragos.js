import React from "react";

//importo componentes
import TarjetaPreview from "./tarjetaPreview";

const ListaTragos = ({ buscador, resultadoListaTragos }) => {
  return (
    <div className="d-flex flex-wrap m-4 justify-content-center w-75">
      {resultadoListaTragos.map((trago) => {
        return (
          <TarjetaPreview
            key={trago.id}
            nombre={trago.nombre}
            tipo={trago.tipo}
            imagen={trago.imagen}
          />
        );
      })}
    </div>
  );
};

export default ListaTragos;
