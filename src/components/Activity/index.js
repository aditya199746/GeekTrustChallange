import React, { useEffect } from "react";
import PageLayoutContainer from "../../containers/PageLayoutContainer";
const useActivity = (props) => {
  const { onStartActivity } = props;
  useEffect(() => {
    onStartActivity();
  }, []);
  return (
    <div>
      <PageLayoutContainer />
    </div>
  );
};

export default useActivity;
