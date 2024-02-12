import { useState } from "react";
import ControlledForm from "./forms/ControlledForm";
import ControlledModal from "./modals/ControlledModal";
// import UncontrolledModal from "./modals/UncontrolledModal";
// import UncontrolledForm from "./forms/UncontrolledForm";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    // <UncontrolledModal>
    //   <ControlledForm />
    // </UncontrolledModal>

    <>
      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>

      <ControlledModal
        shouldShow={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <ControlledForm />
      </ControlledModal>
    </>
  );
}

export default App;
