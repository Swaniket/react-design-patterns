// import CurrentUserLoader from "./container/CurrentUserLoader";
import UserInfo from "./components/UserInfo";
import ProductInfo from "./components/ProductInfo";
// import UserLoader from "./container/UserLoader";
import ResourceLoader from "./container/ResourceLoader";

// const userIds = ["123", "456", "789"];

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

      <ResourceLoader
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
      </ResourceLoader>
    </>
  );
}

export default App;
