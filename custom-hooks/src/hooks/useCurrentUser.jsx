import { useState, useEffect } from "react";
import axios from "axios";

function useCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
}

export default useCurrentUser;
