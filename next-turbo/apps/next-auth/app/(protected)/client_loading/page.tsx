"use client";
// why page loading working?

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Static } from "@/components/static";

export default function ClientPage() {
  const user = useCurrentUser();

  return (
    <div className="flex flex-col gap-4">
      <Static />
      <UserInfo user={user} label="Client component" />
    </div>
  );
}
