import { DangerButton, BugSuccessButton } from "./components/partiallyApply";
import RecursiveComponent from "./components/RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "hi",
      },
      b32: {
        message: "hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <>
      <RecursiveComponent data={nestedObject} />
      <DangerButton text="This is a danger" />
      <BugSuccessButton text="Yes" />
    </>
  );
}

export default App;
