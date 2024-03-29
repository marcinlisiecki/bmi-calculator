import React, { FunctionComponent } from "react";
import StepHeading from "components/StepHeading";
import Button from "components/Button";

interface Props {
  height: number;
  setHeight: (age: number) => void;
  handleNextStep: () => void;
}

const Step3: FunctionComponent<Props> = ({ handleNextStep, height, setHeight }) => {
  return (
    <div className={"flex flex-col items-center"}>
      <StepHeading index={3}>How tall are you?</StepHeading>
      <input
        className="border-b border-black text-center text-4xl mt-10 w-80 mx-auto block outline-none pb-2 focus:border-b-2 transition"
        placeholder={"100-250 (cm)"}
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
        type={"number"}
        min={100}
        max={250}
      />
      <Button
        isVisible={height !== null && height >= 100 && height <= 250}
        onClick={handleNextStep}
      >
        Next
      </Button>
    </div>
  );
};

export default Step3;
