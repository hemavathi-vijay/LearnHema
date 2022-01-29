import React, { Component } from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value=""></option>
      </select>
      {error && <div className="alert alert-dange">{error}</div>}
    </div>
  );
};

export default Select;
