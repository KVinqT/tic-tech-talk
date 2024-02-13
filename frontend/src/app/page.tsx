import Image from "next/image";
import NavBar from "./NavBar";
import UserPosts from "./utils/components/UserPost";
import DropDownButton from "./utils/components/DropDownButton";
import RecentPosts from "./utils/components/RecentPosts";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import PeopleMayKnow from "./utils/components/PeopleMayKnow";

export default function Home() {
  const recommendTopics: string[] = [
    "JavaScript",
    "Java",
    "C#",
    "PHP",
    "Go Lang",
    "Rust",
  ];
  return (
    <div>
      <NavBar />
      <div className="w-[100%] flex">
        {/* contents */}
        <div className="m-10 w-[70%]">
          <div className="flex justify-center gap-10 font-semibold p-4 border-b items-center">
            <h1>For you</h1>
            <h1>Follwoing</h1>
            <div>
              <DropDownButton />
            </div>
          </div>
          <div className="mt-10">
            <UserPosts />
            <UserPosts />
            <UserPosts />
            <UserPosts />
            <UserPosts />
            <UserPosts />
            <UserPosts />
            <UserPosts />
            <UserPosts />
          </div>
        </div>
        {/* suggestions and people you may know */}
        <div className="w-[30%] shadow right-0 h-full">
          <div className="m-10">
            <div>
              <h1 className="font-bold">Recent Viewed</h1>
            </div>
            <div className="mt-6 cursor-pointer">
              <RecentPosts />
              <RecentPosts />
              <RecentPosts />
            </div>
            <div className="w-full">
              <h1 className="font-bold mt-10">Recommend topics</h1>
              {recommendTopics.map((topic) => {
                return (
                  <Badge
                    variant="outline"
                    className="mr-2 text-sm px-4 py-2 mt-4"
                    key={topic}
                  >
                    <Link href="/javaScript">{topic}</Link>{" "}
                  </Badge>
                );
              })}
            </div>
            <div>
              <h1 className="font-bold mt-10">People you may know</h1>
              <PeopleMayKnow />
              <PeopleMayKnow />
              <PeopleMayKnow />
              <PeopleMayKnow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
