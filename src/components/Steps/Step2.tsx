import React, { FunctionComponent } from "react";
import StepHeading from "components/StepHeading/StepHeading";
import Button from "components/Button";

interface Props {
  age: number;
  setAge: (age: number) => void;
  handleNextStep: () => void;
}

const Step2: FunctionComponent<Props> = ({ age, setAge, handleNextStep }) => {
  return (
    <div className={"flex flex-col items-center"}>
      <StepHeading index={2}>How old are you?</StepHeading>
      <input
        className="border-b border-black text-center text-4xl mt-10 w-40 mx-auto block outline-none pb-2 focus:border-b-2 transition"
        placeholder={"18-99"}
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <Button isHidden={age !== null && age >= 18 && age <= 99} onClick={handleNextStep}>
        Next
      </Button>
    </div>
  );
};

export default Step2;
