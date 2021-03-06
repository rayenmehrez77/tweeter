import React from "react";
import { Fade } from "react-reveal";
import { UserToFollow } from "../Components";

const Following = () => {
  return (
    <Fade big cascade>
      <div className="bg-white dark:bg-gray-800 rounded p-4 shadow mt-6">
        <h2 className="border-b font-medium w-full pb-2 text-sm text-gray-600 dark:text-white">
          Who to follow
        </h2>
        <UserToFollow />
      </div>
    </Fade>
  );
};

export default Following;
