"use client";

import { fetchPromise } from "@/lib/promise";
import { useEffect, useTransition } from "react";

export default function Promise() {
  const [isPending, startTransition] = useTransition();

  const fetchData = async () => {
    startTransition(async () => {
      await fetchPromise(3000);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{isPending ? "Loading..." : "Done"}</div>;
}
