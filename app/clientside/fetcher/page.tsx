"use client";

import { useStationByIdQuery } from "@/graphql/generated/first-endpoint";
import { FetchA } from "../components/fetchA";
import { useQuery } from "@tanstack/react-query";

export default function ClientComponent() {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: useStationByIdQuery.getKey({ id: 1 }),
    queryFn: useStationByIdQuery.fetcher(
      { id: 1 },
      {
        test: "123421421",
      }
    ),
  });

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error, null, 2)}</div>;

  return (
    <div className="p-4">
      <div className="flex gap-2 pb-2">
        <FetchA />
        <button
          className="rounded border border-black p-2"
          onClick={() => refetch}
        >
          Refetch
        </button>
      </div>
      <p className="text-2xl font-bold">Client Component</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
