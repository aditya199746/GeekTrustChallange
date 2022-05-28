import React, { useState } from "react";
import TableContainer from "../../containers/TableContainer";
import "./style.css";
const Index = (props) => {
  const { apiData, onChange } = props;

  const [storeSearch, setStoreSearch] = useState("");

  const handleChange = (val) => {
    const inputData = val;
    console.log("////");
    onChange(inputData);
  };
  const bounce = (fun, delay) => {
    let timer;
    return (val) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun(val);
      }, delay);
    };
  };

  const debounce = bounce(handleChange, 500);

  return (
    <div className="container">
      <div className="search-container">
        <input
          className="input-class"
          placeholder="search by name, email or role"
          onChange={(e) => debounce(e.target.value)}
        ></input>
      </div>
      <TableContainer />
    </div>
  );
};

export default Index;
