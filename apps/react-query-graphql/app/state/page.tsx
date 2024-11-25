"use client";

import { Count } from "./_components/count";
import { useState } from "react";

export default function StatePage() {
  const [parentCount, setParentCount] = useState(0);
  return (
    <div>
      <p>{parentCount}</p>
      <button onClick={() => setParentCount((prev) => prev + 1)}>
        Increment Parent Count
      </button>
      <Count parentCount={parentCount} />
    </div>
  );
}
