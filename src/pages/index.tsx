import React, { FunctionComponent, useState } from "react";

import Step1 from "components/steps/Step1";

interface Props {}

const IndexPage: FunctionComponent<Props> = () => {
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  return (
    <div className={"flex justify-center items-center h-screen w-screen"}>
      <Step1 gender={gender} setGender={setGender} />
    </div>
  );
};

export default IndexPage;
