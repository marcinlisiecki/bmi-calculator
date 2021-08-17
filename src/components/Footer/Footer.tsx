import React, { FunctionComponent } from "react";

interface Props {}

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer className={"absolute bottom-0 left-0 w-screen py-8"}>
      <p className={"text-center text-sm font-semibold text-gray-700"}>
        Copyright &copy; 2021{" "}
        <a
          href="https://lisiecki.me/"
          target="_blank"
          rel="noreferrer"
          className="border-b border-b-transparent inline-block text-blue-500 hover:border-blue-500 border-dotted cursor-pointer"
        >
          Marcin Lisiecki
        </a>
      </p>
    </footer>
  );
};

export default Footer;
