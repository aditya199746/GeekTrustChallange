import Editable from "../components/Table/Editable";
import { connect } from "react-redux";
import { thunks } from "../actions";
const mapState = (state) => {
  return {
    apiData: state.apiData,
    searchFromAPI: state.searchFromAPI,
    searchData: state.searchData,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    dispatch(thunks.onChange(value));
  },
});

export default connect(mapState, mapDispatch)(Editable);
