import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserPosts from "@/app/utils/components/UserPost";

const ProfileTabs = () => {
  return (
    <div>
      <div>
        <Tabs defaultValue="posts" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-2 rounded-xl">
            <TabsTrigger value="posts" className="text-primary font-bold">
              Posts
            </TabsTrigger>
            <TabsTrigger value="favorite" className="text-primary font-bold">
              Favorite
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <UserPosts />
            <UserPosts />
            <UserPosts />
          </TabsContent>
          <TabsContent value="favorite">
            {" "}
            <UserPosts />
            <UserPosts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileTabs;
