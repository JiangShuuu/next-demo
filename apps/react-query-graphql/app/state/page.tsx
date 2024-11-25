"use client";
import { useEffect, useState } from "react";
import { fetchPromise } from "@repo/ui/lib/promise";

export default function StatePage() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sec, setSec] = useState(0);

  const reset = () => {
    setCount(0);
    setCount2(0);
  };

  const incrementWay = async () => {
    await fetchPromise(1000).then(() => {
      setCount2((prev) => prev + 1);
    });
  };

  const incrementErrorWay = async () => {
    let num = count;
    await fetchPromise(1000).then(() => {
      setCount(num + 1);
    });
  };

  const incrementEffect = () => {
    setSec((prev) => prev + 1);
  };

  useEffect(() => {
    if (sec === 0) return;
    reset();
    incrementErrorWay();
    incrementWay();
  }, [sec]);

  return (
    <div className="flex gap-4">
      <div>
        <p>{count}</p>
        <button onClick={incrementErrorWay}>Increment ErrorWay</button>
      </div>

      <div>
        <p>{count2}</p>
        <button onClick={incrementWay}>Increment Way</button>
      </div>

      <div>
        <p>{sec}</p>
        <button onClick={incrementEffect}>Increment Effect</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
