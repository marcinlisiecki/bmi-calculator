import React, { FunctionComponent } from "react";
import { default as NextHead } from "next/Head";

interface OwnProps {}

type Props = OwnProps;

const Head: FunctionComponent<Props> = (props) => {
  return (
    <NextHead>
      <title>Online BMI calculator</title>
      <meta name="title" content="Online BMI calculator" />
      <meta
        name="description"
        content="The BMI calculator will allow you to quickly check if your weight is correct"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bmi.lisiecki.me/" />
      <meta property="og:title" content="Online BMI calculator" />
      <meta
        property="og:description"
        content="The BMI calculator will allow you to quickly check if your weight is correct"
      />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bmi.lisiecki.me/" />
      <meta property="twitter:title" content="Online BMI calculator" />
      <meta
        property="twitter:description"
        content="The BMI calculator will allow you to quickly check if your weight is correct"
      />
      <meta property="twitter:image" content="" />
    </NextHead>
  );
};

export default Head;
