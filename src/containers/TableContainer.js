import Table from "../components/Table";
import { connect } from "react-redux";
import {
  thunks,
  setUpadteApiData,
  setDeleteAPIData,
  setDeleteSearchData,
} from "../actions";
const mapState = (state) => {
  return {
    apiData: state.apiData,
    searchFromAPI: state.searchFromAPI,
    perPageData: state.perPageData,
    searchData: state.searchData,
  };
};

const mapDispatch = (dispatch) => ({
  onCheck: (e) => {
    dispatch(thunks.onCheck(e));
  },
  pageClick: (data) => {
    dispatch(thunks.pageClick(data));
  },
  updateApiData: (newData) => {
    dispatch(setUpadteApiData(newData));
  },
  setDeleteAPIData: (user) => {
    dispatch(setDeleteAPIData(user));
  },
  setDeleteSearchData: (user) => {
    dispatch(setDeleteSearchData(user));
    dispatch(thunks.keepDataAccPage());
  },
  setDeleteSelected: () => {
    dispatch(thunks.deleteSelected());
    dispatch(thunks.keepDataAccPage());
  },
});

export default connect(mapState, mapDispatch)(Table);
