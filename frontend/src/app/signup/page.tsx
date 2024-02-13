import React from "react";
import Image from "next/image";
import loginImage from "../login/utils/images/login.jpg";
import SignupCard from "./components/SignupCard";
const SignUp = () => {
  return (
    <div className="flex justify-evenly items-center h-[100vh]">
      <div className="flex justify-evenly w-full items-center flex-wrap">
        <Image src={loginImage} alt="login image" width={500} priority />
        <SignupCard />
      </div>
    </div>
  );
};

export default SignUp;
