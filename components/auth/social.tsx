"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { thirdPartyLogin } from "@/actions/third";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => thirdPartyLogin("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => thirdPartyLogin("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
