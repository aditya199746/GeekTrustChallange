import React from "react";

const Editable = ({
  editFormData,
  handleEditFormChange,
  handleFromSave,
  user,
  handleCross,
}) => {
  return (
    <tr>
      <th></th>
      <td>{user.id}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a role"
          name="role"
          value={editFormData.role}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <span className="fa fa-save" onClick={(e) => handleFromSave(e)}></span>
        <span
          className="fa fa-times "
          style={{ marginLeft: "8px" }}
          onClick={handleCross}
        ></span>
      </td>
    </tr>
  );
};

export default Editable;
