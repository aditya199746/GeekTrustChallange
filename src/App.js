import "./App.css";
import { createStore, applyMiddleware, compose } from "redux";
import reducers, { searchData } from "./reducers";
import ActivityContainer from "./containers/ActivityContainer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCallback, useState, useEffect } from "react";
function App() {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    // middlewares.push(logger);
  }

  const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

  console.log("stign".__proto__);
  return (
    <Provider store={store}>
      <ActivityContainer />
    </Provider>
  );
}

export default App;
