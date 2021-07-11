import React, { FunctionComponent } from "react";
import StepHeading from "components/StepHeading/StepHeading";
import Button from "components/Button";

interface Props {
  gender: "male" | "female" | null;
  setGender: (gender: "male" | "female") => void;
  handleNextStep: () => void;
}

const Step1: FunctionComponent<Props> = ({ gender, setGender, handleNextStep }) => {
  return (
    <div className="flex flex-col items-center">
      <StepHeading index={1}>
        I will ask you some simple questions. First, what's your gender?
      </StepHeading>

      <div className={"flex justify-center gap-x-20 mt-10"}>
        {/* eslint-disable */}
        <img
          src={require("assets/female.svg")}
          width={160}
          height={160}
          alt={"Female"}
          className={`cursor-pointer transition transform rounded-full border-4 border-transparent ${
            gender === "female" && "scale-[1.05] border-blue-500"
          }`}
          onClick={() => setGender("female")}
        />
        <img
          src={require("assets/male.svg")}
          width={160}
          height={160}
          alt={"Male"}
          className={`cursor-pointer transition transform rounded-full border-4 border-transparent ${
            gender === "male" && "scale-[1.05] border-blue-500"
          }`}
          onClick={() => setGender("male")}
        />
      </div>

      <Button isHidden={gender !== null} onClick={handleNextStep}>
        Next
      </Button>
    </div>
  );
};

export default Step1;
