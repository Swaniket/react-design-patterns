import React, { useState } from "react";

function UncontrolledOnboardingFlow({ children, onFinish }) {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = { ...onBoardingData, ...stepData };

    console.log("updatedData", updatedData);

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnBoardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}

export default UncontrolledOnboardingFlow;
