import React, { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Head from "components/Head";

import Step1 from "components/Steps/Step1";
import Step2 from "components/Steps/Step2";
import Step4 from "components/Steps/Step3";
import Results from "components/Steps/Results";
import Footer from "components/Footer";

interface Props {}

const variants = {
  init: { opacity: 0, x: "10vw", transition: { type: "tween" } },
  enter: { opacity: 1, x: 0, transition: { type: "tween" } },
  exit: { opacity: 0, x: "-10vw", transition: { type: "tween" } },
};

const IndexPage: FunctionComponent<Props> = () => {
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [weight, setWeight] = useState<number>(null);
  const [height, setHeight] = useState<number>(null);

  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handleReset = () => {
    setStep(1);
    setGender(null);
    setWeight(null);
    setHeight(null);
  };

  const getBMI = (): number => {
    return parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
  };

  return (
    <>
      <Head />
      <div
        className={
          "flex justify-center items-center h-screen w-screen overflow-x-hidden relative px-10"
        }
      >
        <div
          className={
            "absolute top-6 left-1/2 transform -translate-x-1/2 bg-red-500 w-[84vw] md:w-96 h-1 bg-gray-200 rounded-full"
          }
        >
          <div
            className={`bg-blue-500 h-1 rounded-full transition`}
            style={{ width: (step / 4) * 100 + "%" }}
          />
        </div>
        <AnimatePresence exitBeforeEnter>
          {step === 1 ? (
            <motion.div
              variants={variants}
              animate={"enter"}
              exit={"exit"}
              initial={"init"}
              key={1}
            >
              <Step1 gender={gender} setGender={setGender} handleNextStep={handleNextStep} />
            </motion.div>
          ) : step === 2 ? (
            <motion.div
              variants={variants}
              animate={"enter"}
              exit={"exit"}
              initial={"init"}
              key={2}
            >
              <Step2 weight={weight} setWeight={setWeight} handleNextStep={handleNextStep} />
            </motion.div>
          ) : step === 3 ? (
            <motion.div
              variants={variants}
              animate={"enter"}
              exit={"exit"}
              initial={"init"}
              key={3}
            >
              <Step4 height={height} setHeight={setHeight} handleNextStep={handleNextStep} />
            </motion.div>
          ) : (
            <motion.div
              variants={variants}
              animate={"enter"}
              exit={"exit"}
              initial={"init"}
              key={4}
            >
              <Results bmi={getBMI()} handleReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
