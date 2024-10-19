"use client";

import { wait } from "../lib/tools";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await wait(3000);
    setLoading(false);
  };

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div>
      <p>{loading ? "Loading..." : "Client Page"}</p>
    </div>
  );
}
