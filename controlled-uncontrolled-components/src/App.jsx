/* eslint-disable react/prop-types */
import { useState } from "react";
// import ControlledForm from "./forms/ControlledForm";
// import ControlledModal from "./modals/ControlledModal";
// import UncontrolledModal from "./modals/UncontrolledModal";
// import UncontrolledForm from "./forms/UncontrolledForm";
// import UncontrolledOnboardingFlow from "./onboarding-flows/UncontrolledOnboardingFlow";
import ControlledOnboardingFlow from "./onboarding-flows/ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    {" "}
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "Jhon Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    {" "}
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 27 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    {" "}
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    {" "}
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  // const [showModal, setShowModal] = useState(false);
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBoardingData({ ...onBoardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    // <UncontrolledModal>
    //   <ControlledForm />
    // </UncontrolledModal>

    // <>
    //   <button onClick={() => setShowModal(!showModal)}>
    //     {showModal ? "Hide Modal" : "Show Modal"}
    //   </button>

    //   <ControlledModal
    //     shouldShow={showModal}
    //     onRequestClose={() => setShowModal(false)}
    //   >
    //     <ControlledForm />
    //   </ControlledModal>
    // </>

    // <>
    //   <UncontrolledOnboardingFlow
    //     onFinish={(data) => console.log("Step Finished", data)}
    //   >
    //     <StepOne />
    //     <StepTwo />
    //     <StepThree />
    //   </UncontrolledOnboardingFlow>
    // </>
    <>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onBoardingData.age >= 60 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
