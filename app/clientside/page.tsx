"use client";

import { useMyOrdersQuery } from "@/graphql/generated/client";
import { FetchA } from "./components/fetchA";
export default function ClientComponent() {
  const { data, isFetching, error, refetch } = useMyOrdersQuery({ id: 1704 });

  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      <FetchA />
      <button onClick={() => refetch()}>Refetch</button>
      <p>{isFetching ? "Loading..." : data?.order_by_pk?.id}</p>
      <p>{data?.order_by_pk?.fleet.rental_company.organization.name}</p>
      <p>{data?.order_by_pk?.id}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
