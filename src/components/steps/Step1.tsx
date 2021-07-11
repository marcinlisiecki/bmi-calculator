import React, { FunctionComponent } from "react";

interface Props {
  gender: "male" | "female" | null;
  setGender: (gender: "male" | "female") => void;
}

const Step1: FunctionComponent<Props> = ({ gender, setGender }) => {
  return (
    <div className="flex flex-col items-center">
      <p className={"mx-auto text-blue-500 font-bold text-center text-lg"}>STEP 1</p>
      <h1 className={"font-semibold text-2xl"}>
        I will ask you some simple questions. First, what's your gender?
      </h1>
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

      <button
        className={`bg-blue-500 px-10 py-2 rounded-full text-white font-medium transform transition hover:scale-[1.02] active:scale-[0.98] mt-20 ${
          gender ? "opacity-1" : "opacity-0"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
