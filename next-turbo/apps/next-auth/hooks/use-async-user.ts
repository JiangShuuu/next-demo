import { ExtendedUser } from "@/next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState, useTransition } from "react";

export const useAsyncUser = () => {
  const [user, setUser] = useState<ExtendedUser | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  const fetchUser =  () => {
    startTransition(async() => {
      const session = await getSession();
      setUser(session?.user ?? undefined);
    });
  };

  return { user, isPending, fetchUser };
};
