import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { setUpdatePerPageData } from "../../actions";
import Editable from "../../containers/EditableContainer";
import ReadOnly from "../../containers/ReadOnlyContainer";

import "./style.css";

const Index = (props) => {
  const {
    onCheck,
    pageClick,
    perPageData,
    searchData,
    setDeleteAPIData,
    updateApiData,
    setDeleteSearchData,
    setDeleteSelected,
  } = props;

  const [editContactId, setEditContactid] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [btnState, setBtnState] = useState(true);
  const onCheckChange = (e) => {
    if (e.target.checked) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
    onCheck(e);
  };

  const handlePageClick = (data) => {
    pageClick(data.selected);
  };

  const handleEditClick = (e, user) => {
    e.preventDefault();
    setEditContactid(user.id);

    const formValues = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleFromSave = (e) => {
    e.preventDefault();
    const editedUser = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      role: editFormData.role,
    };
    const newContacts = [...perPageData];
    const index = perPageData.findIndex((user) => user.id == editContactId);

    newContacts[index] = editedUser;

    updateApiData(newContacts[index]);
    setEditContactid(null);
  };
  const handleCross = () => {
    setEditContactid(null);
  };

  const handleDelete = (e, user) => {
    setDeleteAPIData(user);
    setDeleteSearchData(user);
  };

  const deleteSelected = (e) => {
    setDeleteSelected();
  };
  useEffect(() => {
    let btn = true;
    perPageData.map((page) => {
      if (page.isChecked && page.isChecked == true) {
        btn = false;
        return;
      }
    });
    console.log(btnState, "btnState");
    setBtnState(btn);
  }, [btnState]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={
                        perPageData.filter((user) => user?.isChecked !== true)
                          .length < 1
                      }
                      data-testid="masterCheck"
                      name="masterCheck"
                      onChange={(e) => onCheckChange(e)}
                    />
                  </th>
                  <th scope="col" className="btn btn-danger">
                    Id
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {perPageData?.map((user) => (
                  <Fragment>
                    {editContactId == user.id ? (
                      <Editable
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleFromSave={handleFromSave}
                        user={user}
                        handleCross={handleCross}
                      />
                    ) : (
                      <ReadOnly
                        user={user}
                        onCheckChange={onCheckChange}
                        handleEditClick={handleEditClick}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <button
        className="btn btn-danger"
        disabled={btnState}
        onClick={(e) => deleteSelected(e)}
      >
        Delete selected
      </button>
      <div className="pagei">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          marginPagesDisplayed={3}
          pageCount={Math.ceil(searchData.length / 10)}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-item"}
          previousClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
        />
      </div>
    </div>
  );
};

export default Index;
