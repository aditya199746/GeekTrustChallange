import ReadOnly from "../components/Table/Readonly.js";
import { connect } from "react-redux";
import { thunks } from "../actions";
const mapState = (state) => {
  return {
    apiData: state.apiData,
    searchFromAPI: state.searchFromAPI,
    searchData: state.searchData,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(ReadOnly);
