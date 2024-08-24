"use client";

import { useMyOrdersQuery } from "@/graphql/generated/client";
import { FetchA } from "./components/fetchA";
export default function ClientComponent() {
  const { data, isFetching, error, refetch } = useMyOrdersQuery({ id: 1704 });

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="flex gap-2 pb-2">
        <FetchA />
        <button
          className="border border-black rounded p-2"
          onClick={() => refetch()}
        >
          Refetch
        </button>
      </div>
      <p className="text-2xl font-bold">Client Component</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
