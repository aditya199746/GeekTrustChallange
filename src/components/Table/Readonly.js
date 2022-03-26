import React from "react";
import "./style.css";
const Readonly = ({ user, onCheckChange, handleEditClick, handleDelete }) => {
  return (
    <tr>
      <th scope="row">
        <input
          type="checkbox"
          checked={user.isChecked ? true : false}
          className="form-check-input point"
          name={user.id}
          onChange={(e) => onCheckChange(e)}
        />
      </th>
      <td name="id" key={`id_${user.id}`}>
        {user.id}
      </td>
      <td name="name" key={`name_${user.id}`}>
        {user.name}
      </td>
      <td name="email" key={`email_${user.id}`}>
        {user.email}
      </td>
      <td name="role" key={`role_${user.id}`}>
        {user.role}
      </td>
      <td>
        <span
          className="fa fa-edit point"
          onClick={(e) => handleEditClick(e, user)}
        ></span>
        <span
          className="fa fa-trash point"
          onClick={(e) => {
            handleDelete(e, user);
          }}
          style={{ marginLeft: "20px" }}
        ></span>
      </td>
    </tr>
  );
};

export default Readonly;
