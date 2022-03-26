import axios from "axios";

export const SET_API_DATA = "SET_API_DATA";
export const SET_SEARCH_FROM_API = "SET_SEARCH_FROM_API";
export const SET_CHECKED = "SET_CHECKED";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_PER_PAGE_DATA = "SET_PER_PAGE_DATA";
export const SET_SEARCHED_DATA = "SET_SEARCHED_DATA";
export const SET_DELETE_API_DATA = "SET_DELETE_API_DATA";
export const SET_UPDATE_PER_PAGE_DATA = "SET_UPDATE_PER_PAGE_DATA";
export const SET_UPDATE_API_DATA = "SET_UPDATE_API_DATA";
export const SET_DELETE_SEARCH_DATA = "SET_DELETE_SEARCH_DATA";
export const DELETE_SELECTED = "DELETE_SELECTED";

export const setDeleteSelected = () => ({
  type: DELETE_SELECTED,
});
export const setAPIData = (dataVal) => ({
  dataVal,
  type: SET_API_DATA,
});

export const setDeleteSearchData = (user) => ({
  type: SET_DELETE_SEARCH_DATA,
  user,
});

export const setDeleteAPIData = (user) => ({
  type: SET_DELETE_API_DATA,
  user,
});

export const setUpadteApiData = (newData) => ({
  newData,
  type: SET_UPDATE_API_DATA,
});

export const setSearchData = (dataVal) => ({
  dataVal,
  type: SET_SEARCHED_DATA,
});

export const setUpdatePerPageData = (val) => ({
  val,
  type: SET_UPDATE_PER_PAGE_DATA,
});

export const setPerPageData = (dataVal) => ({
  dataVal,
  type: SET_PER_PAGE_DATA,
});

export const setCurrentPage = (dataVal) => ({
  dataVal,
  type: SET_CURRENT_PAGE,
});

export const setSearchFromAPI = (dataVal) => ({
  dataVal,
  type: SET_SEARCH_FROM_API,
});

export const setChecked = (dataVal) => ({
  dataVal,
  type: SET_CHECKED,
});

export const thunks = {
  fetchAPI: () => {
    return (dispatch, getState) => {
      axios
        .get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        )
        .then((res) => {
          dispatch(setAPIData(res.data));

          dispatch(setSearchData(res.data));
          dispatch(thunks.keepDataAccPage());
        });
    };
  },

  onChange: (value) => {
    return (dispatch, getState) => {
      const { apiData } = getState();

      if (value != null) {
        const _newApiData = apiData.filter((api) => {
          if (api.id.includes(value)) {
            return api;
          } else if (api.name.includes(value)) {
            return api;
          } else if (api.email.includes(value)) {
            return api;
          } else if (api.role.includes(value)) {
            return api;
          }
          return;
        });

        dispatch(setSearchData(_newApiData));
      } else {
        dispatch(setSearchData(apiData));
      }
      dispatch(setCurrentPage(0));
      dispatch(thunks.keepDataAccPage());
    };
  },
  onCheck: (e) => {
    return (dispatch, getState) => {
      const { perPageData, apiData } = getState();
      const { name, checked } = e.target;
      if (name === "masterCheck") {
        let tempUser = perPageData.map((user) => {
          return { ...user, isChecked: checked };
        });

        dispatch(setUpdatePerPageData(tempUser));
      } else {
        let tempUser = perPageData.map((user) => {
          return user.id === name ? { ...user, isChecked: checked } : user;
        });

        dispatch(setUpdatePerPageData(tempUser));
        let checkedApiData = apiData.map((api) => {
          tempUser.map((temp) => {
            if (temp.isChecked && temp.id === api.id) {
              api.isChecked = checked;
            }
          });
          return api;
        });

        dispatch(setAPIData(checkedApiData));
        dispatch(setSearchData(checkedApiData));
      }
    };
  },

  pageClick: (data) => {
    return (dispatch, getState) => {
      dispatch(setCurrentPage(data));
      dispatch(thunks.keepDataAccPage());
    };
  },

  keepDataAccPage: () => {
    return (dispatch, getState) => {
      const { currentPage, searchData } = getState();

      let sliced = [];

      if (currentPage === 0) {
        sliced = searchData.slice(0, 10);
      } else {
        sliced = searchData.slice(currentPage * 10, currentPage * 10 + 10);
      }

      dispatch(setPerPageData(sliced));
    };
  },

  deleteSelected: () => {
    return (dispatch, getState) => {
      dispatch(setDeleteAPIData());
      dispatch(thunks.onChange());
    };
  },
};
