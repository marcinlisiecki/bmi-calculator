import React, { FunctionComponent } from "react";
import StepHeading from "components/StepHeading";
import Button from "components/Button";

interface Props {
  weight: number;
  setWeight: (age: number) => void;
  handleNextStep: () => void;
}

const Step3: FunctionComponent<Props> = ({ handleNextStep, weight, setWeight }) => {
  return (
    <div className={"flex flex-col items-center"}>
      <StepHeading index={3}>How much do you weight?</StepHeading>
      <input
        className="border-b border-black text-center text-4xl mt-10 w-80 mx-auto block outline-none pb-2 focus:border-b-2 transition"
        placeholder={"1-999 (kg)"}
        value={weight}
        onChange={(e) => setWeight(parseInt(e.target.value))}
        type={"number"}
        min={1}
        max={999}
      />
      <Button isHidden={weight !== null && weight >= 1 && weight <= 999} onClick={handleNextStep}>
        Next
      </Button>
    </div>
  );
};

export default Step3;
