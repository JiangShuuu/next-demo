// https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#server-components--nextjs-app-router

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
      <div className="p-4">
        <p className="text-2xl font-bold">Server Component</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </HydrationBoundary>
  );
}
