import CurrentUserLoader from "./container/CurrentUserLoader";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
