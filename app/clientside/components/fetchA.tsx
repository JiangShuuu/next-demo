"use client";
import { useStationByIdQuery } from "@/graphql/generated/first-endpoint";

export function FetchA() {
  const { refetch } = useStationByIdQuery({ id: 1 });

  return (
    <button
      className="rounded border border-black p-2"
      onClick={() => refetch()}
    >
      children refetch
    </button>
  );
}
