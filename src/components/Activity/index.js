import React, { useEffect } from "react";
import PageLayoutContainer from "../../containers/PageLayoutContainer";
import Todo from "../ToDo";

const useActivity = (props) => {
  const { onStartActivity } = props;
  useEffect(() => {
    onStartActivity();
  }, []);
  return (
    <div>
      <PageLayoutContainer />
      {/* <Todo /> */}
    </div>
  );
};

export default useActivity;
