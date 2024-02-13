/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import axios from "axios";

function withUser(Component, userId) {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:8080/users/${userId}`
        );
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
}

export default withUser;
