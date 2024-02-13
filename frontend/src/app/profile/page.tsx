import React from "react";
import NavBar from "../NavBar";
import ProfileTabs from "./components/ProfileTabs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="w-[100%] flex">
        <div className="m-10 w-[50%]">
          <div>
            <h1 className="text-primary text-4xl font-bold">Lwin Moe Paing</h1>
            <ProfileTabs />
          </div>
        </div>
        <div className="w-[50%] shadow right-0 h-full">
          <div className="flex items-center gap-8 ml-16 mt-10">
            <div className="">
              <Avatar className="w-[100px] h-[100px]">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>{" "}
            </div>
            <div className="flex items-center justify-center gap-8">
              <div className="flex-col justify-center items-center text-center">
                <p className="text-xl">900</p>
                <h1 className="font-bold text-xl">Follwers</h1>
              </div>
              <div className="text-center">
                <p className="text-xl">90</p>
                <h1 className="font-bold text-xl">Following</h1>
              </div>
              <div className="text-center">
                <p className="text-xl">2</p>
                <h1 className="font-bold text-xl">Posts</h1>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Profile;
