import { connect } from "react-redux";
import { thunks } from "../actions";
import Activity from "../components/Activity";
const mapState = (state) => {
  return {
    apiData: state.apiData,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunks.fetchAPI());
  },
});

export default connect(mapState, mapDispatch)(Activity);
