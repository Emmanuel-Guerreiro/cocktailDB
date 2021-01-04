import React from "react";
import { Link } from "react-router-dom";

const TarjetaPreview = () => {
  return (
    <div className="m-2">
      <div
        className="card shadow-sm p-3 mb-5 bg-white rounded"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPreview;
