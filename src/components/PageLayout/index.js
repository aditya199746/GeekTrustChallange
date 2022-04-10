import React, { useState } from "react";
import TableContainer from "../../containers/TableContainer";
import "./style.css";
const Index = (props) => {
  const { apiData, onChange } = props;

  const [storeSearch, setStoreSearch] = useState("");

  const handleChange = (e) => {
    const inputData = e.target.value;

    onChange(inputData);
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          className="input-class"
          placeholder="search by name, email or role"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <TableContainer />
    </div>
  );
};

export default Index;
