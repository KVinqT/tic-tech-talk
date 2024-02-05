import React from "react";
import Image from "next/image";
import loginImage from "../login/utils/Image/login.jpg";
import LoginCard from "./components/LoginCard";

const Login = () => {
  return (
    <div className="flex justify-evenly items-center h-[100vh]">
      <div className="flex justify-evenly w-full items-center flex-wrap">
        <Image src={loginImage} alt="login image" width={500} priority />
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
