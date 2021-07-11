import React, { FunctionComponent } from "react";
import Button from "components/Button";

interface Props {
  bmi: number;
  handleReset: () => void;
}

const Results: FunctionComponent<Props> = ({ bmi, handleReset }) => {
  const getTextResult = () => {
    if (bmi >= 18.5 && bmi < 25) return <span className={"text-green-500"}>Healthy</span>;
    else if (bmi >= 25 && bmi < 30) return <span className={"text-yellow-500"}>Overweight</span>;
    else if (bmi < 18.5) return <span className={"text-yellow-500"}>Underweight</span>;
    else return <span className={"text-red-500"}>Obese</span>;
  };

  return (
    <div className={"flex flex-col items-center"}>
      <p className={"text-lg font-bold"}>Your BMI is considered {getTextResult()}</p>
      <h1 className={"text-center mx-auto text-5xl text-blue-500 mt-8"}>{bmi}</h1>
      <Button isVisible onClick={handleReset}>
        Again
      </Button>
    </div>
  );
};

export default Results;
