import { useState, useEffect } from "react";
import axios from "axios";

function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return user;
}

export default useUser;
