import React, { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Step1 from "components/Steps/Step1";
import Step2 from "components/Steps/Step2";
import Step3 from "components/Steps/Step3";

interface Props {}

const variants = {
  init: { opacity: 0, x: "10vw", transition: { type: "tween" } },
  enter: { opacity: 1, x: 0, transition: { type: "tween" } },
  exit: { opacity: 0, x: "-10vw", transition: { type: "tween" } },
};

const IndexPage: FunctionComponent<Props> = () => {
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [age, setAge] = useState<number>(null);
  const [weight, setWeight] = useState<number>(null);

  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <div className={"flex justify-center items-center h-screen w-screen overflow-x-hidden"}>
      <AnimatePresence exitBeforeEnter>
        {step === 1 ? (
          <motion.div variants={variants} animate={"enter"} exit={"exit"} initial={"init"} key={1}>
            <Step1 gender={gender} setGender={setGender} handleNextStep={handleNextStep} />
          </motion.div>
        ) : step === 2 ? (
          <motion.div variants={variants} animate={"enter"} exit={"exit"} initial={"init"} key={2}>
            <Step2 age={age} setAge={setAge} handleNextStep={handleNextStep} />
          </motion.div>
        ) : step === 3 ? (
          <motion.div variants={variants} animate={"enter"} exit={"exit"} initial={"init"} key={3}>
            <Step3 weight={weight} setWeight={setWeight} handleNextStep={handleNextStep} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;
