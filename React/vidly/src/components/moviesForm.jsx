import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MoviesFrom = (props) => {
  const { id } = useParams();
  const history = useNavigate();
  return (
    <div>
      <h1>Movie Form {id}</h1>
      <button className="btn btn-primary" onClick={() => history("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MoviesFrom;
