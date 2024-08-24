"use client";
import { useMyOrdersQuery } from "@/graphql/generated/first-endpoint";

export function FetchA() {
  const { refetch } = useMyOrdersQuery({ id: 1704 });

  return (
    <button
      className="border border-black rounded p-2"
      onClick={() => refetch()}
    >
      children refetch
    </button>
  );
}
