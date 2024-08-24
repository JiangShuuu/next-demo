"use client";
import { useMyOrdersQuery } from "@/graphql/generated/client";

export function FetchA() {
  const { refetch } = useMyOrdersQuery({ id: 1704 });

  return (
    <div>
      <button onClick={() => refetch()}>FetchARefetch</button>
    </div>
  );
}
