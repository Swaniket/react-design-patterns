/* eslint-disable react/prop-types */
// import CurrentUserLoader from "./container/CurrentUserLoader";
import UserInfo from "./components/UserInfo";
// import ProductInfo from "./components/ProductInfo";
// import UserLoader from "./container/UserLoader";
// import ResourceLoader from "./container/ResourceLoader";
import DataSource from "./container/DataSource";
import axios from "axios";

// const userIds = ["123", "456", "789"];

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
        <UserInfo />
      </CurrentUserLoader> */}
      {/* {userIds.map((id) => (
        <UserLoader userId={id} key={id}>
          <UserInfo />
        </UserLoader>
      ))} */}

      {/* <ResourceLoader
        resourceUrl="http://localhost:8080/users/123"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl="http://localhost:8080/products/1234"
        resourceName="product"
      >
        <ProductInfo />
      </ResourceLoader> */}

      <DataSource
        getDataFn={getServerData("http://localhost:8080/users/123")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFn={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
