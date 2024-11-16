"use client";

import { UserInfo } from "@/components/user-info";
import { useAsyncUser } from "@/hooks/use-async-user";
import PromiseTransition from "./_components/promise_transition";
import { useEffect } from "react";
import { Static } from "@/components/static";
export default function ClientPage() {
  const { user, isPending, fetchUser } = useAsyncUser();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Static />
      {isPending ? (
        "User AsyncLoading..."
      ) : (
        <UserInfo user={user} label="Client component" />
      )}
      <PromiseTransition />
    </div>
  );
}
