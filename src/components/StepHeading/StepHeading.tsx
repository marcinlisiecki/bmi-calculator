import React, { FunctionComponent } from "react";

interface Props {
  index: number;
}

const StepHeading: FunctionComponent<Props> = ({ index, children }) => {
  return (
    <>
      <p className={"mx-auto text-blue-500 font-bold text-center text-lg"}>STEP {index}</p>
      <h1 className={"font-semibold text-2xl text-center"}>{children}</h1>
    </>
  );
};

export default StepHeading;
