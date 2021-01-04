import React, { useEffect, useState } from "react";

const Buscador = ({ setBuscador, listaTragos }) => {
  const inputHandler = (e) => {
    setBuscador(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center col-12">
      <div className="input-group col-4 m-4 py-4 shadow-sm bg-white rounded">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={inputHandler}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
