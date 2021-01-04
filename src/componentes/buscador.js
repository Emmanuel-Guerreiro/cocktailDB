import React from "react";

const Buscador = () => {
  return (
    <div className="d-flex justify-content-center col-12">
      <div className="input-group col-4 m-4 py-4 shadow-sm bg-white rounded">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
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
