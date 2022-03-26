import "./App.css";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import ActivityContainer from "./containers/ActivityContainer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    // middlewares.push(logger);
  }
  const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
  return (
    <Provider store={store}>
      <ActivityContainer />
    </Provider>
  );
}

export default App;
