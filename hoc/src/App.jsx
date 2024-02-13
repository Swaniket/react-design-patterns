// import printProps from "./hoc/printProps";
// import withUser from "./hoc/withUser";
// import UserInfo from "./components/UserInfo";
import UserInfoForm from "./components/UserInfoForm";

// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, "456");

function App() {
  return (
    <>
      {/* <UserInfoWrapped a={1} b="hello" c={{ name: "swaniket" }} /> */}
      {/* <UserInfoWithLoader /> */}
      <UserInfoForm />
    </>
  );
}

export default App;
