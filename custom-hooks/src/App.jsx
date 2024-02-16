import ProductInfo from "./components/ProductInfo";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <UserInfo userId={123} />
      <UserInfo userId={456} />

      <ProductInfo productId={1234} />
      <ProductInfo productId={5678} />
    </>
  );
}

export default App;
