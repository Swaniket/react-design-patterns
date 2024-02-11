/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function DataSource({ getDataFn = () => {}, resourceName, children }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFn();
      setState(data);
    })();
  }, [getDataFn]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
}

export default DataSource;
