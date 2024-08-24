import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { useMyOrdersQuery, MyOrdersQuery } from "@/graphql/generated/client";

export default async function ServerComponent() {
  const queryClient = new QueryClient();

  const fetchAllPosts = useMyOrdersQuery.fetcher({
    id: 1704,
  });

  const data = await queryClient.fetchQuery<MyOrdersQuery>({
    queryKey: useMyOrdersQuery.getKey({ id: 1704 }),
    queryFn: fetchAllPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <p>{data?.order_by_pk?.id}</p>
      {JSON.stringify(data)}
    </HydrationBoundary>
  );
}
