import React from "react";
import { Link } from "react-router-dom";

const TarjetaPreview = ({ id, nombre, tipo, imagen }) => {
  return (
    <div className="m-2">
      <div
        className="card shadow-sm p-3 mb-5 bg-white rounded"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" src={imagen} alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{tipo}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary">
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPreview;
