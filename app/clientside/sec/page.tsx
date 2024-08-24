"use client";

import { useGetRentalCompanyExtraInfoQuery } from "@/graphql/generated/second-endpoint";

export default function ClientSec() {
  const { data, isFetching, error, refetch } =
    useGetRentalCompanyExtraInfoQuery({ id: 187 });

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error.message, null, 2)}</div>;

  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Second Client Component</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
