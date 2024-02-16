import { useState, useEffect } from "react";

function useDataSource(getResourceFn) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFn();
      setResource(result);
    })();
  }, [getResourceFn]);

  return resource;
}

export default useDataSource;
