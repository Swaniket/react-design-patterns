/* eslint-disable react/prop-types */
// import useCurrentUser from "../hooks/useCurrentUser";
// import useUser from "../hooks/useUser";
import useDataSource from "../hooks/useDataSource";
// import useResource from "../hooks/useResource";
import axios from "axios";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

// const localStorageResource = (key) => () => {
//   return localStorage.getItem(key);
// };

function UserInfo({ userId }) {
  // const user = useResource(`http://localhost:8080/users/${userId}`);
  // const user = useUser(userId);
  // const user = useCurrentUser();

  const user = useDataSource(
    serverResource(`http://localhost:8080/users/${userId}`)
  );
  // const message = useDataSource(localStorageResource("message"));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default UserInfo;
